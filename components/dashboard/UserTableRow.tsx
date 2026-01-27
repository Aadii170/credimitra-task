'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { User } from '@/types';
import { cn } from '@/lib/utils';

interface UserTableRowProps {
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

export function UserTableRow({ user, onClick }: UserTableRowProps) {
    return (
        <motion.tr
            initial={{ opacity: 0, x: 20, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => onClick(user)}
            className="group cursor-pointer transition-colors hover:bg-[#ffd861]"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick(user);
                }
            }}
        >
            <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 overflow-hidden ring-2 ring-white shadow-sm group-hover:ring-primary/20 transition-all">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                        ) : (
                            <span className="font-medium text-xs">{getInitials(user.name)}</span>
                        )}
                    </div>
                    <span className="font-medium text-stone-900 transition-colors">{user.name}</span>
                </div>
            </td>
            <td className="hidden px-6 py-4 sm:table-cell">
                <div className="flex items-center gap-2 text-stone-500">
                    <Mail className="h-4 w-4 opacity-70" />
                    <span className="text-sm">{user.email}</span>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className={cn(
                        "h-2 w-2 rounded-full ring-2 ring-white shadow-sm",
                        user.status === 'Active' ? "bg-emerald-500" : "bg-stone-300"
                    )} />
                    <span className={cn(
                        "px-2.5 py-0.5 rounded-full text-xs font-medium border shadow-sm",
                        user.status === 'Active'
                            ? "bg-white text-emerald-700 border-emerald-100"
                            : "bg-stone-50 text-stone-500 border-stone-100"
                    )}>
                        {user.status}
                    </span>
                </div>
            </td>
        </motion.tr>
    );
}
