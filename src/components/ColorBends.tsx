'use client';

import { motion } from 'framer-motion';

const blobs = [
  { color: '#7c3aed', x: '10%', y: '20%', size: 500, duration: 8, delay: 0 },
  { color: '#2563eb', x: '60%', y: '10%', size: 450, duration: 10, delay: 1.5 },
  { color: '#db2777', x: '80%', y: '60%', size: 400, duration: 9, delay: 0.8 },
  { color: '#0891b2', x: '30%', y: '70%', size: 480, duration: 11, delay: 2 },
  { color: '#059669', x: '50%', y: '40%', size: 350, duration: 7, delay: 1 },
];

const ColorBends = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30"
          style={{
            background: blob.color,
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            filter: 'blur(80px)',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            x: [0, 60, -40, 20, 0],
            y: [0, -50, 30, -20, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* subtle noise overlay to enhance the "bends" texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default ColorBends;
