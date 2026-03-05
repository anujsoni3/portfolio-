import React, { useEffect, useState, useCallback } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  life: number;
}

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<Star[]>([]);
  const [isMoving, setIsMoving] = useState(false);

  const createStar = useCallback((x: number, y: number) => {
    return {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      opacity: Math.random() * 0.8 + 0.2,
      scale: Math.random() * 0.5 + 0.5,
      life: 1,
    };
  }, []);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Add new star when moving
      if (Math.random() > 0.7) {
        setStars(prev => [...prev, createStar(e.clientX, e.clientY)]);
      }

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(moveTimeout);
    };
  }, [createStar]);

  // Animate and remove stars
  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prev => 
        prev
          .map(star => ({
            ...star,
            life: star.life - 0.02,
            opacity: star.opacity * 0.98,
            scale: star.scale * 0.99,
          }))
          .filter(star => star.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${isMoving ? 1.2 : 1})`,
        }}
      >
        <div className="w-full h-full bg-cyan-bright/40 rounded-full animate-pulse">
          <div className="w-2 h-2 bg-cyan-bright rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Star trail */}
      {stars.map(star => (
        <div
          key={star.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: star.x,
            top: star.y,
            opacity: star.opacity,
            transform: `translate(-50%, -50%) scale(${star.scale})`,
          }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" className="text-cyan-bright">
            <path
              d="M4 0L4.9 2.1L7 1L5.9 3.1L8 4L5.9 4.9L7 7L4.9 5.9L4 8L3.1 5.9L1 7L2.1 4.9L0 4L2.1 3.1L1 1L3.1 2.1Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </>
  );
};

export default CursorEffect;