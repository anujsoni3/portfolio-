import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Terminal, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type MenuItem = {
    label: string;
    path: string;
    rotation?: number;
    hoverStyles?: { bgColor?: string; textColor?: string };
};

const NAV_ITEMS: MenuItem[] = [
    { label: 'home', path: '/', rotation: -4, hoverStyles: { bgColor: '#7C8AFF', textColor: '#fff' } },
    { label: 'about', path: '/about', rotation: 4, hoverStyles: { bgColor: '#E8875B', textColor: '#fff' } },
    { label: 'experience', path: '/experience', rotation: -5, hoverStyles: { bgColor: '#B8A9F0', textColor: '#fff' } },
    { label: 'skills', path: '/skills', rotation: 5, hoverStyles: { bgColor: '#56D4CF', textColor: '#111' } },
    { label: 'projects', path: '/projects', rotation: -4, hoverStyles: { bgColor: '#F7DF1E', textColor: '#111' } },
    { label: 'achievements', path: '/achievements', rotation: 6, hoverStyles: { bgColor: '#E3B341', textColor: '#111' } },
    { label: 'contact', path: '/contact', rotation: -4, hoverStyles: { bgColor: '#56D49B', textColor: '#111' } },
];

export default function BubbleMenu() {
    const { isDark, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const rowRef = useRef<HTMLDivElement>(null);
    const bubblesRef = useRef<(HTMLDivElement | null)[]>([]);
    const labelsRef = useRef<(HTMLSpanElement | null)[]>([]);

    const menuBg = isDark ? 'rgba(22,26,32,0.96)' : 'rgba(255,255,255,0.96)';
    const textCol = isDark ? '#E6EDF3' : '#1C1C1E';

    // Hide row on mount (no flash)
    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;
        gsap.set(row, { height: 0, overflow: 'hidden', opacity: 0 });
    }, []);

    // Open / close animation
    useEffect(() => {
        const row = rowRef.current;
        const bubbles = bubblesRef.current.filter(Boolean) as HTMLDivElement[];
        const labels = labelsRef.current.filter(Boolean) as HTMLSpanElement[];
        if (!row) return;

        if (isOpen) {
            gsap.killTweensOf([row, ...bubbles, ...labels]);
            gsap.set(bubbles, { scale: 0 });
            gsap.set(labels, { y: 12, autoAlpha: 0 });
            // First open the row
            gsap.to(row, {
                height: 'auto', opacity: 1, duration: 0.32, ease: 'power3.out',
                onComplete: () => {
                    // Then pop bubbles in
                    bubbles.forEach((b, i) => {
                        const tl = gsap.timeline({ delay: i * 0.06 });
                        tl.to(b, { scale: 1, duration: 0.38, ease: 'back.out(1.6)' });
                        if (labels[i]) {
                            tl.to(labels[i], { y: 0, autoAlpha: 1, duration: 0.28, ease: 'power3.out' }, '-=0.25');
                        }
                    });
                },
            });
        } else {
            gsap.killTweensOf([row, ...bubbles, ...labels]);
            gsap.to(bubbles, { scale: 0, duration: 0.15, ease: 'power2.in', stagger: 0.03 });
            gsap.to(row, { height: 0, opacity: 0, duration: 0.25, ease: 'power3.in', delay: 0.12 });
        }
    }, [isOpen]);

    useEffect(() => {
        const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
        window.addEventListener('keydown', fn);
        return () => window.removeEventListener('keydown', fn);
    }, []);

    // Close on click outside the nav container
    const navRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (isOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [isOpen]);

    const handleNav = (path: string) => {
        setIsOpen(false);
        setTimeout(() => navigate(path), 260);
    };

    return (
        <>
            <style>{`
        .bm-pill { transition: background 0.22s ease, color 0.22s ease; }
        .bm-pill:hover { background: var(--hbg) !important; color: var(--hcol) !important; }
        @media (min-width: 640px) {
          .bm-pill { transform: rotate(var(--rot)); }
          .bm-pill:hover { transform: rotate(var(--rot)) scale(1.05) !important; }
          .bm-pill:active { transform: rotate(var(--rot)) scale(0.95) !important; }
        }
      `}</style>

            {/* Single expanding nav pill */}
            <nav
                ref={navRef}
                className="fixed left-1/2 -translate-x-1/2 w-[92%] max-w-[860px] z-[99] top-3 sm:top-5"
                style={{
                    borderRadius: 18,
                    background: menuBg,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: isDark
                        ? '0 4px 28px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)'
                        : '0 4px 24px rgba(0,0,0,0.1),  inset 0 0 0 1px rgba(0,0,0,0.07)',
                }}
                aria-label="Main navigation"
            >
                {/* Top bar */}
                <div className="flex items-center justify-between h-[60px] px-4 relative">
                    <button
                        type="button"
                        onClick={() => setIsOpen(o => !o)}
                        aria-label="Toggle navigation"
                        className="flex flex-col items-center justify-center gap-[6px] cursor-pointer p-1 rounded-lg"
                    >
                        <span className="block rounded-sm transition-all duration-300"
                            style={{
                                width: 24, height: 2, background: textCol,
                                transform: isOpen ? 'translateY(4px) rotate(45deg)' : 'none'
                            }} />
                        <span className="block rounded-sm transition-all duration-300"
                            style={{
                                width: 24, height: 2, background: textCol,
                                transform: isOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
                            }} />
                    </button>

                    <Link to="/"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
                        style={{ color: 'var(--accent-primary)' }}>
                        <Terminal size={16} />
                        <span className="font-bold font-mono text-sm hidden sm:inline">anuj@portfolio</span>
                        <span className="font-bold font-mono text-sm sm:hidden">anuj</span>
                    </Link>

                    <button onClick={toggleTheme} aria-label="Toggle theme"
                        className="p-2 rounded-lg border transition-all duration-200"
                        style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                        {isDark ? <Sun size={14} /> : <Moon size={14} />}
                    </button>
                </div>

                {/* Bubble row — always in DOM, GSAP controls height */}
                <div ref={rowRef}>
                    <div style={{ height: 1, margin: '0 14px', background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)' }} />
                    <div style={{ display: 'flex', gap: 6, padding: '10px 10px 12px', flexWrap: 'wrap' }}>
                        {NAV_ITEMS.map((item, i) => (
                            <div
                                key={item.path}
                                ref={el => { bubblesRef.current[i] = el; }}
                                onClick={() => handleNav(item.path)}
                                className="bm-pill"
                                style={{
                                    flex: '1 1 0',
                                    minWidth: 0,
                                    borderRadius: 999,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '0.6rem 0.4rem',
                                    fontSize: '0.88rem',
                                    fontWeight: 500,
                                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                    color: textCol,
                                    willChange: 'transform',
                                    '--rot': `${item.rotation ?? 0}deg`,
                                    '--hbg': item.hoverStyles?.bgColor,
                                    '--hcol': item.hoverStyles?.textColor,
                                } as CSSProperties}
                            >
                                <span ref={el => { labelsRef.current[i] = el; }} style={{ willChange: 'transform, opacity' }}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
