'use client';

import * as React from 'react';
import { Moon, Sun, Users } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Header() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 shadow-md backdrop-blur-xl supports-[backdrop-filter]:bg-background/90">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-2 font-bold tracking-tight pl-6 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-sm border border-border/60">
                        <Users className="h-5 w-5" />
                    </div>
                    <span className="hidden sm:inline-block">Users Dashboard</span>
                </div>

                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="group inline-flex h-9 items-center justify-center rounded-md border border-border bg-card px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
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
                        <div className="h-4 w-4 rounded-full bg-muted" />
                    )}
                </button>
            </div>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">YouTube</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Add A Contact Us Button In Nav</a>
        </header>
    );
}
