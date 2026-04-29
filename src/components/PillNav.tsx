'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface PillNavItem {
  href: string;
  label: string;
  ariaLabel?: string;
}

interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  leftText?: string;
  rightText?: string;
}

const PillNav = ({
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#1b1b1d', // foreground
  pillColor = '#ffffff', // card
  hoveredPillTextColor = '#1b1b1d', // foreground
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  leftText,
  rightText
}: PillNavProps) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    circleRefs.current = circleRefs.current.slice(0, items.length);
    tlRefs.current = tlRefs.current.slice(0, items.length);
    activeTweenRefs.current = activeTweenRefs.current.slice(0, items.length);
  }, [items]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        if(circle) {
            circle.style.width = `${D}px`;
            circle.style.height = `${D}px`;
            circle.style.bottom = `-${delta}px`;

            gsap.set(circle, {
                xPercent: -50,
                scale: 0,
                transformOrigin: `50% ${originY}px`
            });
        }

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, xPercent: -50 });
    }
    
    if (initialLoadAnimation) {
      const navItems = navItemsRef.current;

      if (navItems) {
        gsap.fromTo(navItems.querySelectorAll('li'), { opacity: 0, y: 10 }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease,
            stagger: 0.05,
            delay: 0.4
        });
      }
    }


    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 6, duration: 0.3, ease });
        gsap.to(lines[1], { opacity: 0, duration: 0.3, ease });
        gsap.to(lines[2], { rotation: -45, y: -6, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { opacity: 1, duration: 0.3, ease });
        gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, xPercent: -50 },
          {
            opacity: 1,
            y: 0,
            xPercent: -50,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          xPercent: -50,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = (href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  const isRouterLink = (href: string) => href && !isExternalLink(href) && !href.startsWith('#');
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    
    if(isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };


  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor
  } as React.CSSProperties;

  return (
    <div className="pill-nav-container">
      <span className="nav-brand-text">{leftText}</span>

      <div className="nav-center">
        <nav className={cn('pill-nav', className)} aria-label="Primary" style={cssVars}>
          <button
            className="hamburger-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            ref={hamburgerRef}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </nav>

        <div className="menu-popover" ref={mobileMenuRef} style={cssVars}>
          <ul className="mobile-menu-list">
            {items.map((item, i) => (
              <li key={item.href || `mobile-item-${i}`}>
                <a
                    href={item.href}
                    className={cn('mobile-menu-link', { 'is-active': activeHref === item.href })}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      toggleMobileMenu();
                    }}
                >
                    {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="nav-status-text">{rightText}</span>
    </div>
  );
};

export default PillNav;
