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
                    className="group inline-flex h-9 items-center justify-center rounded-md border border-stone-800 bg-stone-900 px-3 text-sm font-medium text-stone-400 hover:bg-stone-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 transition-colors"
                    aria-label="Toggle theme"
                >
                    {mounted ? (
                        <>
                            {theme === 'dark' ? (
                                <>
                                    <Sun className="mr-2 h-4 w-4" />
                                    Day
                                </>
                            ) : (
                                <>
                                    <Moon className="mr-2 h-4 w-4" />
                                    Night
                                </>
                            )}
                        </>
                    ) : (
                        <div className="h-4 w-4 rounded-full bg-stone-800" />
                    )}
                </button>
            </div>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">YouTube</a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Add A Contact Us Button In Nav</a>
</header>
    );
}
