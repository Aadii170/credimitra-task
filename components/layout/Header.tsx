'use client';

import * as React from 'react';
import { Moon, Sun, Users } from 'lucide-react';
import { useTheme } from 'next-themes';

import { motion } from 'framer-motion';

export function Header() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-800 bg-stone-950 shadow-md backdrop-blur-xl supports-[backdrop-filter]:bg-stone-950/80">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-2 font-bold tracking-tight pl-6 text-stone-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbd965] text-stone-900 shadow-sm border border-white/10">
                        <Users className="h-5 w-5" />
                    </div>
                    <span className="hidden sm:inline-block">Users Dashboard</span>
                </div>

                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="group relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-stone-800 bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 transition-colors"
                    aria-label="Toggle theme"
                >
                    {mounted ? (
                        <>
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </>
                    ) : (
                        <div className="h-4 w-4 rounded-full bg-stone-800" />
                    )}
                </button>
            </div>
        </header>
    );
}
