import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export interface CardNavItem {
    label: string;
    bgColor: string;
    textColor: string;
    links: { label: string; path: string }[];
}

interface CardNavProps {
    userName: string;
}

const CardNav: React.FC<CardNavProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const location = useLocation();
    const { isDark, toggleTheme } = useTheme();

    const navGroups: CardNavItem[] = [
        {
            label: 'About Me',
            bgColor: isDark ? '#1C2128' : '#2B2F77',
            textColor: '#FFFFFF',
            links: [
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Skills', path: '/skills' },
                { label: 'Achievements', path: '/achievements' },
            ]
        },
        {
            label: 'Work',
            bgColor: isDark ? '#1C2128' : '#2F6F6D',
            textColor: '#FFFFFF',
            links: [
                { label: 'Experience', path: '/experience' },
                { label: 'Projects', path: '/projects' },
            ]
        },
        {
            label: 'Connect',
            bgColor: isDark ? '#1C2128' : '#C25B2A',
            textColor: '#FFFFFF',
            links: [
                { label: 'Contact', path: '/contact' },
            ]
        },
    ];

    const calculateHeight = () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            return 340;
        }
        return 260;
    };

    const createTimeline = useCallback(() => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease: 'power3.out'
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.08 }, '-=0.1');

        return tl;
    }, []);

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [isDark, createTimeline]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;
            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, createTimeline]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className="fixed left-1/2 -translate-x-1/2 w-[92%] max-w-[860px] z-[99] top-3 sm:top-5">
            <nav
                ref={navRef}
                className="block h-[60px] p-0 rounded-2xl shadow-lg relative overflow-hidden will-change-[height] backdrop-blur-xl transition-colors duration-300"
                style={{ backgroundColor: isDark ? 'rgba(13,17,23,0.92)' : 'rgba(255,255,255,0.92)', boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)' : '0 4px 24px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.06)' }}
            >
                {/* Top Bar */}
                <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-[2]">
                    {/* Hamburger */}
                    <div
                        className="h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] group"
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                    >
                        <div
                            className={`w-[26px] h-[2px] bg-current transition-all duration-300 ease-linear origin-center text-text-primary ${isOpen ? 'translate-y-[4px] rotate-45' : ''
                                } group-hover:opacity-75`}
                        />
                        <div
                            className={`w-[26px] h-[2px] bg-current transition-all duration-300 ease-linear origin-center text-text-primary ${isOpen ? '-translate-y-[4px] -rotate-45' : ''
                                } group-hover:opacity-75`}
                        />
                    </div>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-accent-primary hover:text-accent-sub transition-colors absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <Terminal size={18} />
                        <span className="font-bold font-mono text-sm hidden sm:inline">anuj@portfolio</span>
                        <span className="font-bold font-mono text-sm sm:hidden">anuj</span>
                    </Link>

                    {/* Right side: theme toggle */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg border border-border-theme text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={15} /> : <Moon size={15} />}
                        </button>
                    </div>
                </div>

                {/* Card Content */}
                <div
                    className={`absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col md:flex-row items-stretch gap-2 z-[1] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
                        }`}
                    aria-hidden={!isExpanded}
                >
                    {navGroups.map((group, idx) => (
                        <div
                            key={group.label}
                            ref={setCardRef(idx)}
                            className="select-none relative flex flex-col gap-2 p-3 sm:p-4 rounded-xl min-w-0 flex-[1_1_auto] md:flex-[1_1_0%] transition-colors duration-200"
                            style={{ backgroundColor: group.bgColor, color: group.textColor }}
                        >
                            <div className="font-semibold tracking-tight text-base sm:text-lg opacity-90">
                                {group.label}
                            </div>
                            <div className="mt-auto flex flex-col gap-0.5">
                                {group.links.map((lnk) => (
                                    <Link
                                        key={lnk.path}
                                        to={lnk.path}
                                        onClick={() => {
                                            setIsOpen(false);
                                            const tl = tlRef.current;
                                            if (tl) {
                                                tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
                                                tl.reverse();
                                            }
                                        }}
                                        className={`inline-flex items-center gap-1.5 no-underline cursor-pointer transition-opacity duration-200 hover:opacity-75 text-sm sm:text-[15px] ${location.pathname === lnk.path ? 'font-semibold' : 'font-normal'
                                            }`}
                                        style={{ color: group.textColor }}
                                    >
                                        <ArrowUpRight size={14} className="shrink-0" />
                                        {lnk.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
