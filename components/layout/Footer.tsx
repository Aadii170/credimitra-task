import Link from 'next/link';
import {
    ArrowUpRight,
    BarChart3,
    Github,
    ShieldCheck,
    Sparkles,
    Users,
} from 'lucide-react';

type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
};

type FooterLinkGroup = {
    title: string;
    links: FooterLink[];
};

const highlights = [
    {
        title: 'Sharper visibility',
        description: 'Monitor account health, activity, and momentum from one calm surface.',
        icon: Sparkles,
    },
    {
        title: 'Action-ready workflows',
        description: 'Jump from trends to the exact users who need a follow-up next.',
        icon: Users,
    },
    {
        title: 'Clear reporting',
        description: 'Turn status signals into decision-friendly views for your team.',
        icon: BarChart3,
    },
];

const linkGroups: FooterLinkGroup[] = [
    {
        title: 'Navigate',
        links: [
            { label: 'Overview', href: '/#overview' },
            { label: 'User workspace', href: '/#workspace' },
            { label: 'Status insights', href: '/#status-breakdown' },
        ],
    },
    {
        title: 'Capabilities',
        links: [
            { label: 'Search and filters', href: '/#workspace' },
            { label: 'User analytics', href: '/#insights' },
            { label: 'Detailed profiles', href: '/#workspace' },
        ],
    },
    {
        title: 'Built with',
        links: [
            { label: 'Next.js', href: 'https://nextjs.org', external: true },
            { label: 'Tailwind CSS', href: 'https://tailwindcss.com', external: true },
            { label: 'Recharts', href: 'https://recharts.org', external: true },
        ],
    },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-stone-800 bg-stone-950 text-stone-300">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fbd965]/80 to-transparent" />
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#fbd965]/12 blur-3xl" />

            <div className="container relative mx-auto px-4 py-16 md:px-8">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
                    <div className="rounded-[2rem] border border-stone-800/80 bg-white/[0.03] p-8 shadow-[0_24px_90px_-54px_rgba(251,217,101,0.8)] backdrop-blur-sm md:p-10">
                        <div className="max-w-2xl space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#fbd965]/30 bg-[#fbd965]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6de88]">
                                <ShieldCheck className="h-4 w-4" />
                                Credit workflow intelligence
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 font-bold text-stone-50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fbd965] text-stone-950 shadow-lg shadow-[#fbd965]/20">
                                        <span className="text-lg font-black">C</span>
                                    </div>
                                    <div>
                                        <p className="text-xl tracking-tight">CreditMitra</p>
                                        <p className="text-sm font-medium text-stone-400">Confident decisions, cleaner operations.</p>
                                    </div>
                                </div>

                                <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-stone-50 md:text-4xl">
                                    A footer that feels as polished as the dashboard above it.
                                </h2>
                                <p className="max-w-2xl text-sm leading-7 text-stone-400 md:text-base">
                                    CreditMitra keeps user monitoring focused, readable, and trustworthy — so your team can spot change quickly and act with context.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {highlights.map(({ title, description, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-stone-800/80 bg-stone-900/70 p-5 transition-transform duration-200 hover:-translate-y-1"
                                >
                                    <div className="mb-4 inline-flex rounded-xl bg-[#fbd965]/15 p-2 text-[#f6de88]">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-stone-50">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-stone-400">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {linkGroups.map((group) => (
                            <div
                                key={group.title}
                                className="rounded-[1.75rem] border border-stone-800/80 bg-stone-900/50 p-6 backdrop-blur-sm"
                            >
                                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                                    {group.title}
                                </h3>
                                <div className="mt-5 flex flex-col gap-4 text-sm text-stone-300">
                                    {group.links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            target={link.external ? '_blank' : undefined}
                                            rel={link.external ? 'noreferrer' : undefined}
                                            className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-transparent bg-white/[0.02] px-4 py-3 transition-colors hover:border-stone-700 hover:bg-white/[0.05] hover:text-[#fbd965]"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="h-4 w-4 text-stone-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#fbd965]" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-stone-800/80 pt-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} CreditMitra. Built for clear customer operations.</p>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-stone-800 bg-stone-900/70 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-stone-400">
                            Dashboard experience
                        </span>
                        <Link
                            href="https://github.com/Aadii170/credimitra-task"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-white/[0.03] px-4 py-2 text-sm text-stone-200 transition-colors hover:border-[#fbd965]/40 hover:text-[#fbd965]"
                        >
                            <Github className="h-4 w-4" />
                            View project
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
