import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';


interface Tech {
    name: string;
    src: string;
    color: string;
}

// skillicons.dev — most reliable, specifically designed for dev tech logos
// Usage: https://skillicons.dev/icons?i={slug}  (returns a PNG sheet; use individual approach below)
// Direct per-icon SVG via devicons or simple-icons
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
// Skill Icons PNG (more reliable for AWS etc.)
const SK = (slug: string) =>
    `https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/${slug}.png`;

const TECHS: Tech[] = [
    // ── Languages ──
    { name: 'JavaScript', src: `${DI}/javascript/javascript-original.svg`, color: '#F7DF1E' },
    { name: 'TypeScript', src: `${DI}/typescript/typescript-original.svg`, color: '#3178C6' },
    { name: 'Python', src: `${DI}/python/python-original.svg`, color: '#3776AB' },
    { name: 'C++', src: `${DI}/cplusplus/cplusplus-original.svg`, color: '#00599C' },
    { name: 'Java', src: `${DI}/java/java-original.svg`, color: '#ED8B00' },

    // ── Frontend ──
    { name: 'React', src: `${DI}/react/react-original.svg`, color: '#61DAFB' },
    { name: 'Next.js', src: `${DI}/nextjs/nextjs-original.svg`, color: '#FFFFFF' },
    { name: 'Tailwind', src: `${DI}/tailwindcss/tailwindcss-original.svg`, color: '#06B6D4' },
    { name: 'Vite', src: SI('vite'), color: '#646CFF' },
    { name: 'Bootstrap', src: `${DI}/bootstrap/bootstrap-original.svg`, color: '#7952B3' },

    // ── Backend ──
    { name: 'Node.js', src: `${DI}/nodejs/nodejs-original.svg`, color: '#339933' },
    { name: 'Express', src: `${DI}/express/express-original.svg`, color: '#FFFFFF' },
    { name: 'FastAPI', src: `${DI}/fastapi/fastapi-original.svg`, color: '#009688' },
    { name: 'Flask', src: `${DI}/flask/flask-original.svg`, color: '#FFFFFF' },
    { name: 'GraphQL', src: SI('graphql'), color: '#E10098' },

    // ── Databases ──
    { name: 'MongoDB', src: `${DI}/mongodb/mongodb-original.svg`, color: '#47A248' },
    { name: 'PostgreSQL', src: `${DI}/postgresql/postgresql-original.svg`, color: '#4169E1' },
    { name: 'MySQL', src: `${DI}/mysql/mysql-original.svg`, color: '#4479A1' },
    { name: 'Redis', src: `${DI}/redis/redis-original.svg`, color: '#DC382D' },

    // ── AWS (using SK for reliable coloured PNGs) ──
    { name: 'AWS', src: SK('AWS'), color: '#FF9900' },
    { name: 'S3', src: SK('Amazon_S3'), color: '#569A31' },
    { name: 'Lambda', src: SK('AWS_Lambda'), color: '#FF9900' },
    { name: 'EC2', src: SK('Amazon_EC2'), color: '#FF9900' },
    { name: 'DynamoDB', src: SK('Amazon_DynamoDB'), color: '#4053D6' },
    { name: 'RDS', src: SK('Amazon_RDS'), color: '#527FFF' },
    { name: 'CloudFront', src: SK('Amazon_CloudFront'), color: '#FF9900' },
    { name: 'SQS', src: SK('Amazon_SQS'), color: '#FF9900' },

    // ── DevOps / Infra ──
    { name: 'Docker', src: `${DI}/docker/docker-original.svg`, color: '#2496ED' },
    { name: 'Kubernetes', src: `${DI}/kubernetes/kubernetes-original.svg`, color: '#326CE5' },
    { name: 'GCP', src: SI('googlecloud'), color: '#4285F4' },
    { name: 'Git', src: `${DI}/git/git-original.svg`, color: '#F05032' },
    { name: 'GitHub', src: `${DI}/github/github-original.svg`, color: '#FFFFFF' },
    { name: 'Linux', src: `${DI}/linux/linux-original.svg`, color: '#FCC624' },

    // ── ML / Data ──
    { name: 'TensorFlow', src: `${DI}/tensorflow/tensorflow-original.svg`, color: '#FF6F00' },
    { name: 'PyTorch', src: `${DI}/pytorch/pytorch-original.svg`, color: '#EE4C2C' },
    { name: 'Pandas', src: `${DI}/pandas/pandas-original.svg`, color: '#150458' },
    { name: 'NumPy', src: `${DI}/numpy/numpy-original.svg`, color: '#4DABCF' },
    { name: 'OpenCV', src: SI('opencv'), color: '#5C3EE8' },

    // ── Tools ──
    { name: 'Postman', src: `${DI}/postman/postman-original.svg`, color: '#FF6C37' },
    { name: 'VS Code', src: `${DI}/vscode/vscode-original.svg`, color: '#007ACC' },
    { name: 'Figma', src: SI('figma'), color: '#F24E1E' },
];


interface TechPressureProps {
    className?: string;
}

const TechPressure: React.FC<TechPressureProps> = ({ className = '' }) => {
    const { isDark } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const smoothRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const onLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const LERP_SPEED = 0.12;
        const MAX_DIST = 220;

        const tick = () => {
            smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, LERP_SPEED);
            smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, LERP_SPEED);

            itemsRef.current.forEach((el) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = smoothRef.current.x - cx;
                const dy = smoothRef.current.y - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Normalised proximity 0 (far) → 1 (directly on)
                const proximity = Math.max(0, 1 - dist / MAX_DIST);
                const scale = 0.75 + proximity * 0.65;        // 0.75 → 1.4
                const opacity = 0.35 + proximity * 0.65;      // 0.35 → 1.0
                const brightness = 0.6 + proximity * 0.6;     // 0.6 → 1.2

                el.style.transform = `scale(${scale})`;
                el.style.opacity = String(opacity);
                el.style.filter = `brightness(${brightness})`;
            });

            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className={`w-full ${className}`}>
            {/* Section heading — bold typographic design */}
            <div className="text-center mb-8 px-4">
                {/* Small tag badge */}
                <span
                    style={{
                        display: 'inline-block',
                        marginBottom: '10px',
                        padding: '3px 14px',
                        borderRadius: 999,
                        fontSize: '0.7rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: 600,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        background: isDark ? 'rgba(146,144,195,0.14)' : 'rgba(60,61,55,0.10)',
                        color: isDark ? '#9290C3' : '#3C3D37',
                        border: isDark ? '1px solid rgba(146,144,195,0.25)' : '1px solid rgba(60,61,55,0.20)',
                    }}
                >
                    what i work with
                </span>

                {/* Main title */}
                <h2
                    style={{
                        fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        color: isDark ? '#ECE8FF' : '#181C14',
                        margin: 0,
                    }}
                >
                    Tech{' '}
                    <span style={{ color: isDark ? '#9290C3' : '#697565' }}>Stack</span>
                </h2>

                {/* Gradient underline bar */}
                <div
                    style={{
                        height: 3,
                        width: 72,
                        borderRadius: 999,
                        margin: '12px auto 0',
                        background: isDark
                            ? 'linear-gradient(90deg, #535C91, #9290C3, #B8B5E0)'
                            : 'linear-gradient(90deg, #3C3D37, #697565, #C8BCA4)',
                    }}
                />
            </div>

            {/* Icon grid */}
            <div className="flex flex-wrap justify-center gap-6 px-4 pb-2">
                {TECHS.map((tech, i) => (
                    <div
                        key={tech.name}
                        ref={(el) => { itemsRef.current[i] = el; }}
                        className="flex flex-col items-center gap-1.5 cursor-default select-none"
                        style={{
                            opacity: 0.35,
                            transition: 'none',
                            willChange: 'transform, opacity, filter',
                        }}
                        title={tech.name}
                    >
                        <img
                            src={tech.src}
                            alt={tech.name}
                            width={44}
                            height={44}
                            loading="lazy"
                            style={{ display: 'block' }}
                        />
                        <span
                            className="text-[10px] font-mono text-center leading-none"
                            style={{ color: tech.color, opacity: 0.85 }}
                        >
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechPressure;
