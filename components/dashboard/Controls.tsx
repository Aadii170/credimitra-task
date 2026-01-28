'use client';
import * as React from 'react';
import { Search, SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


interface ControlsProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    statusFilter: 'All' | 'Active' | 'Inactive';
    setStatusFilter: (status: 'All' | 'Active' | 'Inactive') => void;
    sortBy: 'name_asc' | 'name_desc';
    setSortBy: (sort: 'name_asc' | 'name_desc') => void;
    itemsPerPage: number;
    setItemsPerPage: (count: number) => void;
    viewType: 'table' | 'card';
    setViewType: (type: 'table' | 'card') => void;
}

export function Controls({
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortBy,
    setSortBy,
    itemsPerPage,
    setItemsPerPage,
    viewType,
    setViewType
}: ControlsProps) {
    return (
        <div className="bg-white rounded-3xl shadow-md border border-stone-200 p-5 transition-all hover:shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 sm:max-w-xs group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search by name or email..."
                        className="pl-10 bg-white rounded-full border-transparent shadow-sm hover:shadow-md focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all h-11 text-stone-900 placeholder:text-stone-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                    {/* View Toggle */}
                    <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-border/50">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setViewType('table')}
                            className={cn(
                                'h-9 w-9 p-0 rounded-full transition-all',
                                viewType === 'table'
                                    ? 'bg-amber-100 text-amber-900 shadow-sm ring-1 ring-amber-200'
                                    : 'text-stone-400 hover:bg-stone-50 hover:text-stone-900'
                            )}
                        >
                            <List className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setViewType('card')}
                            className={cn(
                                'h-9 w-9 p-0 rounded-full transition-all',
                                viewType === 'card'
                                    ? 'bg-amber-100 text-amber-900 shadow-sm ring-1 ring-amber-200'
                                    : 'text-stone-400 hover:bg-stone-50 hover:text-stone-900'
                            )}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Status Filter */}
                    <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-border/50">
                        {(['All', 'Active', 'Inactive'] as const).map((status) => (
                            <Button
                                key={status}
                                variant="ghost"
                                size="sm"
                                onClick={() => setStatusFilter(status)}
                                className={cn(
                                    'h-9 px-4 text-xs font-medium rounded-full transition-all',
                                    statusFilter === status
                                        ? 'bg-amber-100 text-amber-900 shadow-sm ring-1 ring-amber-200'
                                        : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                                )}
                            >
                                {status}
                            </Button>
                        ))}
                    </div>

                    {/* Sort Select */}
                    <div className="relative group">
                        <select
                            className="h-11 w-[140px] appearance-none rounded-full border-transparent bg-white pl-4 pr-9 py-2 text-xs font-medium shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-300 cursor-pointer text-stone-900"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'name_asc' | 'name_desc')}
                        >
                            <option value="name_asc">Name (A-Z)</option>
                            <option value="name_desc">Name (Z-A)</option>
                        </select>
                        <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                    </div>

                    {/* Items Per Page */}
                    <div className="relative">
                        <select
                            className="h-11 appearance-none rounded-full border-transparent bg-white pl-4 pr-9 py-2 text-xs font-medium shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-300 cursor-pointer text-stone-900"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        >
                            <option value={5}>5 row</option>
                            <option value={10}>10 row</option>
                            <option value={20}>20 row</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 opacity-50 pointer-events-none text-muted-foreground" />
                    </div>
                </div>
            </div>
        </div>
    );
}
