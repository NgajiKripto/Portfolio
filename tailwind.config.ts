import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
        "colors": {
            "tertiary-fixed": "#e1e3e4",
            "on-surface-variant": "#42474d",
            "on-error": "#ffffff",
            "on-primary": "#ffffff",
            "inverse-primary": "#a7caf0",
            "on-secondary-fixed-variant": "#45474a",
            "surface-bright": "#f6faff",
            "inverse-surface": "#293138",
            "secondary-fixed": "#e2e2e6",
            "tertiary-fixed-dim": "#c5c7c8",
            "surface": "#f6faff",
            "on-tertiary": "#ffffff",
            "secondary-container": "#dfdfe3",
            "on-tertiary-fixed-variant": "#454748",
            "outline-variant": "#c2c7ce",
            "surface-container-lowest": "#ffffff",
            "primary": "#0e3756",
            "on-secondary": "#ffffff",
            "surface-container-high": "#e0e9f2",
            "on-tertiary-container": "#babcbd",
            "inverse-on-surface": "#e9f2fb",
            "surface-container": "#e6eff8",
            "on-primary-fixed": "#001d33",
            "secondary-fixed-dim": "#c6c6ca",
            "tertiary": "#333536",
            "on-secondary-container": "#616266",
            "on-primary-container": "#9cbfe4",
            "tertiary-container": "#494c4d",
            "on-primary-fixed-variant": "#254969",
            "on-tertiary-fixed": "#191c1d",
            "surface-dim": "#d2dbe4",
            "primary-fixed-dim": "#a7caf0",
            "primary-container": "#2a4e6e",
            "on-error-container": "#93000a",
            "surface-container-low": "#ecf5fe",
            "on-surface": "#141d23",
            "outline": "#73777e",
            "error-container": "#ffdad6",
            "secondary": "#5d5e62",
            "surface-container-highest": "#dbe4ed",
            "on-secondary-fixed": "#1a1c1f",
            "background": "#f6faff",
            "error": "#ba1a1a",
            "primary-fixed": "#cee5ff",
            "on-background": "#141d23",
            "surface-tint": "#3e6182",
            "surface-variant": "#dbe4ed"
        },
        "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
        },
        "spacing": {
            "md": "1rem",
            "container-max": "1280px",
            "gutter": "1.5rem",
            "lg": "1.5rem",
            "xs": "0.25rem",
            "sm": "0.5rem",
            "xxl": "4rem",
            "xl": "2.5rem"
        },
        "fontFamily": {
            "body-md": "var(--font-inter)",
            "headline-lg": "var(--font-manrope)",
            "headline-md": "var(--font-manrope)",
            "body-lg": "var(--font-inter)",
            "headline-xl": "var(--font-manrope)",
            "label-sm": "var(--font-inter)"
        },
        "fontSize": {
            "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
            "headline-lg": ["32px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
            "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
            "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
            "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
            "label-sm": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.02em", "fontWeight": "500" }]
        },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
