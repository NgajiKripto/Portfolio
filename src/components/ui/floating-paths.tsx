'use client';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

// Using a fixed seed for the random number generator to ensure consistent "random" paths
let seed = 1;
function random() {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Function to generate a random number within a range
function randomBetween(min: number, max: number) {
  return Math.floor(random() * (max - min + 1) + min);
}

// Function to generate the SVG path data
function generatePath(
  i: number,
  startPoint: { x: number; y: number },
  numPoints: number,
  chaoticness: number,
  amplitude: number
) {
  let path = `M ${startPoint.x},${startPoint.y}`;
  let currentPoint = startPoint;

  for (let j = 0; j < numPoints; j++) {
    const angle = (Math.PI * 2 * (j + random() * chaoticness)) / numPoints;
    const distance = random() * amplitude;
    const nextPoint = {
      x: currentPoint.x + Math.cos(angle) * distance,
      y: currentPoint.y + Math.sin(angle) * distance,
    };
    path += ` Q ${currentPoint.x + (nextPoint.x - currentPoint.x) / 2},${
      currentPoint.y + (nextPoint.y - currentPoint.y) / 2 + (random() - 0.5) * 50
    } ${nextPoint.x},${nextPoint.y}`;
    currentPoint = nextPoint;
  }
  return path;
}

interface PathData {
  d: string;
  duration: number;
  opacity: number;
}

interface FloatingPathsProps {
  position: number;
  color?: string;
  opacityStart?: number;
  opacityStep?: number;
}

export function FloatingPaths({
  position,
  color = 'rgba(15,23,42,0.1)',
  opacityStart = 0.6,
  opacityStep = 0.02,
}: FloatingPathsProps) {
  const [paths, setPaths] = useState<PathData[]>([]);

  useEffect(() => {
    // This code now runs only on the client, after hydration
    
    // Different seed for each instance to get different paths
    seed = position === 1 ? 1 : 100; 

    const generatedPaths = Array.from({ length: 36 }).map((_, i) => {
      const startPoint = {
        x: randomBetween(-100, 100),
        y: randomBetween(-100, 100),
      };
      const pathData = generatePath(
        i,
        startPoint,
        randomBetween(3, 6),
        0.5,
        randomBetween(200, 400)
      );
      const duration = randomBetween(20, 30);
      const opacity = Math.max(0.1, opacityStart - i * opacityStep);

      return {
        d: pathData,
        duration,
        opacity,
      };
    });
    setPaths(generatedPaths);
  }, [position, opacityStart, opacityStep]);

  if (paths.length === 0) {
    return null;
  }
  
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid slice"
        initial={{
          scale: position === 1 ? 1.5 : 2,
          x: position === 1 ? '-20%' : '10%',
          y: position === 1 ? '-20%' : '10%',
        }}
        animate={{
          scale: position === 1 ? 2.5 : 3.5,
          x: position === 1 ? '10%' : '-10%',
          y: position === 1 ? '10%' : '-20%',
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <g>
          {paths.map((p, index) => (
            <motion.path
              key={index}
              d={p.d}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </g>
      </motion.svg>
    </div>
  );
}
