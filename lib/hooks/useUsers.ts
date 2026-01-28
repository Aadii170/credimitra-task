import { useState, useEffect, useMemo, useCallback } from 'react';
import { User, UserResponse } from '@/types';

interface UseUsersReturn {
    users: User[];
    paginatedUsers: User[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    statusFilter: 'All' | 'Active' | 'Inactive';
    setStatusFilter: (status: 'All' | 'Active' | 'Inactive') => void;
    sortBy: 'name_asc' | 'name_desc';
    setSortBy: (sort: 'name_asc' | 'name_desc') => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    itemsPerPage: number;
    setItemsPerPage: (count: number) => void;
    totalPages: number;
    retry: () => void;
}

export function useUsers(): UseUsersReturn {
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Controls
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Inactive'>('All');
    const [sortBy, setSortBy] = useState<'name_asc' | 'name_desc'>('name_asc');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    const fetchUsers = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            // Simulate network latency as requested
            await new Promise(r => setTimeout(r, 300));
            const response = await fetch('/users.json');

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data: UserResponse = await response.json();
            setAllUsers(data.users);
        } catch (err: unknown) {
            console.error('Fetch error:', err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Failed to load users. Please check your connection.');
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const processedUsers = useMemo(() => {
        let result = [...allUsers];

        if (debouncedSearchQuery) {
            const lowerQuery = debouncedSearchQuery.toLowerCase();
            result = result.filter(
                (u) =>
                    u.name.toLowerCase().includes(lowerQuery) ||
                    u.email.toLowerCase().includes(lowerQuery)
            );
        }

        if (statusFilter !== 'All') {
            result = result.filter((u) => u.status === statusFilter);
        }

        result.sort((a, b) => {
            if (sortBy === 'name_asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        return result;
    }, [allUsers, debouncedSearchQuery, statusFilter, sortBy]);

    const totalPages = Math.ceil(processedUsers.length / itemsPerPage);
    const paginatedUsers = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return processedUsers.slice(start, start + itemsPerPage);
    }, [processedUsers, currentPage, itemsPerPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchQuery, statusFilter, itemsPerPage]);

    return {
        users: processedUsers,
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
        retry: fetchUsers,
    };
}
