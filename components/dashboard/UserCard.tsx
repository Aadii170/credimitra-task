'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { User } from '@/types';
import { cn } from '@/lib/utils';

interface UserCardProps {
    user: User;
    onClick: (user: User) => void;
}

function getInitials(name: string) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

export function UserCard({ user, onClick }: UserCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => onClick(user)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick(user);
                }
            }}
            className="group relative flex flex-col items-center bg-white p-6 rounded-3xl shadow-sm border border-stone-200 cursor-pointer hover:shadow-xl hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 transition-all duration-300"
        >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-stone-900 overflow-hidden text-xl font-bold mb-3 ring-4 ring-stone-50 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                    <span>{getInitials(user.name)}</span>
                )}
            </div>

            <h3 className="text-lg font-bold text-center text-stone-900 line-clamp-1">{user.name}</h3>

            <div className="flex items-center gap-1.5 text-stone-600 mt-1 mb-3">
                <Mail className="h-3 w-3" />
                <span className="text-xs truncate max-w-[150px]">{user.email}</span>
            </div>

            <div className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold ring-1 ring-inset",
                user.status === 'Active'
                    ? "bg-[#fbd965] text-stone-900 ring-stone-900/10"
                    : "bg-stone-200 text-stone-600 ring-stone-400/20"
            )}>
                {user.status}
            </div>
        </motion.div>
    );
}
