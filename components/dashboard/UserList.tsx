'use client';

import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { User as UserIcon, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Pagination } from '@/components/ui/pagination';
import { User } from '@/types';
import { UserCard } from './UserCard';
import { UserTableRow } from './UserTableRow';

interface UserListProps {
    users: User[];
    isLoading?: boolean;
    error?: string | null;
    onUserClick: (user: User) => void;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    retry?: () => void;
    viewType: 'table' | 'card';
}

export function UserList({
    users,
    isLoading,
    error,
    onUserClick,
    currentPage,
    totalPages,
    onPageChange,
    retry,
    viewType
}: UserListProps) {

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center rounded-xl border border-destructive/20 bg-destructive/5 gap-4 h-64">
                <div className="p-3 rounded-full bg-destructive/10 text-destructive">
                    <AlertCircle className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                    <h3 className="font-semibold text-destructive">Failed to load users</h3>
                    <p className="text-sm text-muted-foreground">{error}</p>
                </div>
                {retry && (
                    <Button variant="outline" onClick={retry} className="mt-2 border-destructive/20 hover:bg-destructive/10">
                        Try Again
                    </Button>
                )}
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="space-y-4">
                {viewType === 'table' ? (
                    <div className="rounded-xl border border-border bg-card overflow-hidden">
                        <div className="border-b border-border bg-muted/40 px-6 py-4">
                            <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                        </div>
                        <div className="divide-y divide-border">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-4 px-6 py-4 animate-pulse">
                                    <div className="h-10 w-10 rounded-full bg-muted" />
                                    <div className="space-y-2 flex-1">
                                        <div className="h-4 w-1/4 rounded bg-muted" />
                                        <div className="h-3 w-1/3 rounded bg-muted" />
                                    </div>
                                    <div className="h-8 w-8 rounded bg-muted" />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="h-64 rounded-3xl bg-muted animate-pulse" />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="flex h-96 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-card/50 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <UserIcon className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <div className="space-y-1">
                    <h3 className="text-lg font-semibold">No users found</h3>
                    <p className="text-sm text-muted-foreground">
                        Try adjusting your search or filters.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {viewType === 'table' ? (
                <div className="bg-[#fdfdf5] rounded-3xl shadow-md border border-stone-200 overflow-hidden transition-all hover:shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-stone-50/50 text-stone-500 border-b border-stone-100">
                                <tr>
                                    <th className="px-6 py-4 font-medium">User</th>
                                    <th className="hidden px-6 py-4 font-medium sm:table-cell">Email</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                <AnimatePresence mode="popLayout">
                                    {users.map((user) => (
                                        <UserTableRow
                                            key={user.id}
                                            user={user}
                                            onClick={onUserClick}
                                        />
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                        {users.map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                                onClick={onUserClick}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            )}

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )}
        </div>
    );
}
