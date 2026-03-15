import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
// @ts-ignore
import type { Application } from '@splinetool/runtime';

interface AboutRobotProps {
    className?: string;
}

export default function AboutRobot({ className = '' }: AboutRobotProps) {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frameId: number | null = null;

        const handleMouseMove = (e: MouseEvent) => {
            // ONLY act on real, user-driven events to prevent infinite loop recursion.
            if (!e.isTrusted) return;

            // Throttle using requestAnimationFrame to prevent lagging the WebGL thread
            if (frameId === null) {
                frameId = requestAnimationFrame(() => {
                    const canvas = containerRef.current?.querySelector('canvas');
                    if (canvas) {
                        // Some Spline versions/LookAt controllers specifically listen for PointerEvents
                        const pointerEvent = new PointerEvent('pointermove', {
                            clientX: e.clientX,
                            clientY: e.clientY,
                            bubbles: true,
                            cancelable: true,
                            pointerId: 1,
                            isPrimary: true,
                            pointerType: 'mouse',
                        });
                        
                        const mouseEvent = new MouseEvent('mousemove', {
                            clientX: e.clientX,
                            clientY: e.clientY,
                            bubbles: true,
                            cancelable: true,
                        });

                        canvas.dispatchEvent(pointerEvent);
                        canvas.dispatchEvent(mouseEvent);
                    }
                    frameId = null;
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (frameId !== null) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative w-full h-full min-h-[400px] flex items-center justify-center ${className}`}>
            {/* Loading Skeleton */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                        className="w-full h-full max-w-[400px] max-h-[400px] rounded-full bg-accent-sub/10 blur-3xl"
                    />
                    <div className="absolute flex flex-col items-center gap-3">
                        <div className="w-8 h-8 rounded-full border-t-2 border-accent-sub animate-spin" />
                        <span className="text-text-muted text-sm font-mono tracking-widest uppercase">Initializing AI</span>
                    </div>
                </div>
            )}

            {/* Spline Model */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.9 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full absolute inset-0 pointer-events-none"
            >
                <Spline
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    onLoad={() => setIsLoading(false)}
                    className="w-full h-full"
                    style={{ background: 'transparent' }}
                />
            </motion.div>
        </div>
    );
}
