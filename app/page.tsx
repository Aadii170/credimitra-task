'use client';

import * as React from 'react';
import { UserList } from '@/components/dashboard/UserList';
import { Controls } from '@/components/dashboard/Controls';
import { Analytics } from '@/components/dashboard/Analytics';
import { UserDetails } from '@/components/dashboard/UserDetails';
import { UserStatusChart } from '@/components/dashboard/UserStatusChart';
import { User } from '@/types';
import { useUsers } from '@/lib/hooks/useUsers';

export default function DashboardPage() {
  const {
    users,
    paginatedUsers,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    retry
  } = useUsers();

  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const [viewType, setViewType] = React.useState<'table' | 'card'>('table');

  return (
    <div className="container py-10 px-4 md:px-8 max-w-screen-2xl mx-auto space-y-8">
      <div className="flex flex-col gap-2 pl-6">
        <h1 className="text-3xl font-bold tracking-tight">Users Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your team members and view their account status.
        </p>
      </div>

      <Analytics users={users} />

      <div className="bg-gradient-to-br from-[#f8edc0] via-[#f1ecd8] to-[#e4e5e7] rounded-3xl shadow-md border border-stone-200 overflow-hidden transition-all hover:shadow-lg">
        <div className="p-6">
          <Controls
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            viewType={viewType}
            setViewType={setViewType}
          />
        </div>

        <div className="px-6 pb-6">
          <UserList
            users={paginatedUsers}
            isLoading={isLoading}
            error={error}
            onUserClick={setSelectedUser}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            retry={retry}
            viewType={viewType}
          />
        </div>
      </div>

      <UserStatusChart users={users} />

      <UserDetails
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
