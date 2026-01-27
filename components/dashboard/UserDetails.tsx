'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Mail, Clock, Loader2 } from 'lucide-react';
import { User } from '@/types';
import { Button } from '@/components/ui/button';

// Generic helper for initials
function getInitials(name: string) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

interface UserDetailsProps {
    user: User | null;
    onClose: () => void;
}

export function UserDetails({ user, onClose }: UserDetailsProps) {
    const [isLoading, setIsLoading] = React.useState(false);
    const drawerRef = React.useRef<HTMLDivElement>(null);
    const previousFocusRef = React.useRef<HTMLElement | null>(null);

    // Lazy load simulation
    React.useEffect(() => {
        if (user) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 600); // Simulate network delay
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, [user]);

    // Focus Trap & Esc Key
    React.useEffect(() => {
        if (user) {
            // Focus drawer after animation (simulated delay or immediate)
            setTimeout(() => {
                drawerRef.current?.focus();
            }, 100);

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose();

                // Simple Tab Trap
                if (e.key === 'Tab' && drawerRef.current) {
                    const focusableElements = drawerRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0] as HTMLElement;
                    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                previousFocusRef.current?.focus();
            };
        }
    }, [user, onClose]);

    return (
        <AnimatePresence>
            {user && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                        aria-hidden="true"
                    />
                    <motion.div
                        ref={drawerRef}
                        tabIndex={-1}
                        role="dialog"
                        aria-modal="true"
                        aria-label="User Details"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md focus:outline-none max-h-[90vh] overflow-y-auto space-y-4 no-scrollbar p-4"
                    >
                        {isLoading ? (
                            <div className="flex h-64 flex-col items-center justify-center gap-4 rounded-3xl bg-white/50 backdrop-blur-md border border-white/20 shadow-xl">
                                <Loader2 className="h-8 w-8 animate-spin text-stone-900" />
                                <p className="text-sm font-medium text-stone-600">Loading details...</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {/* CARD 1: Profile (Image, Name, Email, Status) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative flex flex-col items-center bg-gradient-to-br from-[#f8edc0] via-[#f1ecd8] to-[#e4e5e7] p-6 rounded-3xl shadow-xl border border-white/20"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={onClose}
                                        className="absolute right-4 top-4 hover:bg-white/40 text-stone-500"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>

                                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/40 text-stone-900 overflow-hidden text-2xl font-bold mb-4 ring-4 ring-white/50 shadow-lg mt-2">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                                        ) : (
                                            <span>{getInitials(user.name)}</span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-center text-stone-900">{user.name}</h3>

                                    <div className="flex items-center gap-2 text-stone-600 mt-1 mb-4">
                                        <Mail className="h-3.5 w-3.5" />
                                        <span className="text-sm">{user.email}</span>
                                    </div>

                                    <div className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ring-1 ring-inset ${user.status === 'Active' ? 'bg-[#fbd965] text-stone-900 ring-stone-900/10' : 'bg-stone-200 text-stone-600 ring-stone-400/20'}`}>
                                        {user.status}
                                    </div>
                                </motion.div>

                                {/* CARD 2: Details (About, Dates) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="flex flex-col gap-6 bg-gradient-to-br from-[#f8edc0] via-[#f1ecd8] to-[#e4e5e7] p-6 rounded-3xl shadow-xl border border-white/20"
                                >
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium text-stone-500 uppercase tracking-wider pl-1">About</h4>
                                        <p className="text-sm leading-relaxed text-stone-800 bg-white/50 p-4 rounded-2xl shadow-sm border border-white/20">
                                            {user.bio || "No bio available."}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1 p-3 rounded-2xl border border-white/20 bg-white/50 shadow-sm">
                                            <div className="flex items-center gap-2 text-stone-500 mb-1">
                                                <Calendar className="h-3.5 w-3.5" />
                                                <span className="text-xs font-medium">Joined</span>
                                            </div>
                                            <p className="text-sm font-medium text-stone-900">{new Date(user.joinedAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="space-y-1 p-3 rounded-2xl border border-white/20 bg-white/50 shadow-sm">
                                            <div className="flex items-center gap-2 text-stone-500 mb-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span className="text-xs font-medium">Last Seen</span>
                                            </div>
                                            <p className="text-sm font-medium text-stone-900">{new Date(user.lastSeen).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
