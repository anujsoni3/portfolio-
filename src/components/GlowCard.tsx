import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    glowColor?: string;
    particleCount?: number;
    enableParticles?: boolean;
    enableBorderGlow?: boolean;
    enableClickRipple?: boolean;
}

const DEFAULT_GLOW_COLOR = '132, 0, 255';

const GlowCard: React.FC<GlowCardProps> = ({
    children,
    className = '',
    style,
    glowColor = DEFAULT_GLOW_COLOR,
    particleCount = 8,
    enableParticles = true,
    enableBorderGlow = true,
    enableClickRipple = true,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
    const isHoveredRef = useRef(false);

    const clearParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        particlesRef.current.forEach(p => {
            gsap.to(p, {
                scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
                onComplete: () => p.parentNode?.removeChild(p),
            });
        });
        particlesRef.current = [];
    }, []);

    const spawnParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current || !enableParticles) return;
        const { width, height } = cardRef.current.getBoundingClientRect();

        for (let i = 0; i < particleCount; i++) {
            const tid = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;
                const dot = document.createElement('div');
                dot.style.cssText = `
          position:absolute; width:4px; height:4px; border-radius:50%;
          background:rgba(${glowColor},0.9);
          box-shadow:0 0 6px rgba(${glowColor},0.5);
          pointer-events:none; z-index:50;
          left:${Math.random() * width}px; top:${Math.random() * height}px;
        `;
                cardRef.current!.appendChild(dot);
                particlesRef.current.push(dot);

                gsap.fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.8, duration: 0.3, ease: 'back.out(1.7)' });
                gsap.to(dot, {
                    x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80,
                    duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true,
                });
                gsap.to(dot, { opacity: 0.2, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
            }, i * 80);
            timeoutsRef.current.push(tid);
        }
    }, [particleCount, glowColor, enableParticles]);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const rx = ((e.clientX - rect.left) / rect.width) * 100;
            const ry = ((e.clientY - rect.top) / rect.height) * 100;
            el.style.setProperty('--glow-x', `${rx}%`);
            el.style.setProperty('--glow-y', `${ry}%`);
            el.style.setProperty('--glow-intensity', '1');
        };

        const handleEnter = () => {
            isHoveredRef.current = true;
            spawnParticles();
        };

        const handleLeave = () => {
            isHoveredRef.current = false;
            el.style.setProperty('--glow-intensity', '0');
            clearParticles();
        };

        const handleClick = (e: MouseEvent) => {
            if (!enableClickRipple) return;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const maxD = Math.max(
                Math.hypot(x, y), Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height),
            );
            const ripple = document.createElement('div');
            ripple.style.cssText = `
        position:absolute; width:${maxD * 2}px; height:${maxD * 2}px; border-radius:50%;
        background:radial-gradient(circle, rgba(${glowColor},0.35) 0%, rgba(${glowColor},0.15) 30%, transparent 70%);
        left:${x - maxD}px; top:${y - maxD}px; pointer-events:none; z-index:60;
      `;
            el.appendChild(ripple);
            gsap.fromTo(ripple, { scale: 0, opacity: 1 }, {
                scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out',
                onComplete: () => ripple.remove(),
            });
        };

        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('click', handleClick);

        return () => {
            el.removeEventListener('mouseenter', handleEnter);
            el.removeEventListener('mouseleave', handleLeave);
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('click', handleClick);
            isHoveredRef.current = false;
            clearParticles();
        };
    }, [spawnParticles, clearParticles, enableClickRipple, glowColor]);

    return (
        <div
            ref={cardRef}
            className={`glow-card ${enableBorderGlow ? 'glow-card--border' : ''} ${className}`}
            style={{
                ...style,
                position: 'relative',
                overflow: 'hidden',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-color': glowColor,
            } as React.CSSProperties}
        >
            {children}
        </div>
    );
};

export default GlowCard;
