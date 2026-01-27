'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, UserX } from 'lucide-react';
import { User } from '@/types';

interface AnalyticsProps {
    users: User[];
}

export function Analytics({ users }: AnalyticsProps) {
    const total = users.length;
    const active = users.filter((u) => u.status === 'Active').length;
    const inactive = total - active;
    // Calculate percentages, avoid division by zero
    const activePercent = total > 0 ? (active / total) * 100 : 0;
    const inactivePercent = total > 0 ? (inactive / total) * 100 : 0;

    return (
        <div className="flex flex-wrap items-center gap-4">
            {/* Total Users Pill */}
            <div className="flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-sm border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Users className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Total Users</span>
                    <span className="text-xl font-bold">{total}</span>
                </div>
            </div>

            {/* Active Users Pill - Highlighted */}
            <div className="flex items-center gap-3 rounded-full bg-[#fbd965] px-6 py-3 shadow-sm text-stone-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40 text-stone-900">
                    <UserCheck className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide opacity-80">Active</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold">{active}</span>
                        <span className="text-xs opacity-80">({activePercent.toFixed(0)}%)</span>
                    </div>
                </div>
            </div>

            {/* Inactive Pill */}
            <div className="flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-sm border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <UserX className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Inactive</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold">{inactive}</span>
                        <span className="text-xs text-muted-foreground">({inactivePercent.toFixed(0)}%)</span>
                    </div>
                </div>
            </div>

            {/* Progress Bar (Visual representation) */}
            <div className="flex-1 min-w-[200px] h-12 rounded-full bg-card border border-border/50 p-1 flex items-center shadow-sm">
                <div className="h-full w-full rounded-full bg-secondary overflow-hidden relative flex">
                    <motion.div
                        className="h-full bg-[#fbd965]"
                        initial={{ width: 0 }}
                        animate={{ width: `${activePercent}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
                <span className="ml-3 mr-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                    Rate
                </span>
            </div>
        </div>
    );
}
