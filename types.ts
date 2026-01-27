export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    status: 'Active' | 'Inactive';
    joinedAt: string;
    lastSeen: string;
    bio: string;
}

export interface UserResponse {
    users: User[];
}
