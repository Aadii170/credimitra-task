'use client';

import * as React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { User } from '@/types';
import { motion } from 'framer-motion';

interface UserStatusChartProps {
    users: User[];
}

export function UserStatusChart({ users }: UserStatusChartProps) {
    const activeCount = users.filter(u => u.status === 'Active').length;
    const inactiveCount = users.filter(u => u.status === 'Inactive').length;
    const isEmpty = users.length === 0;

    const data = isEmpty
        ? [{ name: 'Empty', value: 1, color: '#f5f5f4' }]
        : [
            { name: 'Active', value: activeCount, color: '#fbd965' },   // Active Yellow
            { name: 'Inactive', value: inactiveCount, color: '#e5e7eb' }, // Inactive Gray
        ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#f8edc0] via-[#f1ecd8] to-[#e4e5e7] rounded-3xl shadow-lg border border-white/20 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
        >
            <div className="flex flex-col gap-4 bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm w-full md:w-auto">
                <div>
                    <h3 className="text-xl font-bold text-stone-900">Analytics</h3>
                    <p className="text-sm text-stone-600 max-w-xs mt-1">
                        Live status distribution of your team members.
                    </p>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-center gap-3 p-2 rounded-xl bg-white/50 border border-white/40">
                        <div className="w-3 h-3 rounded-full bg-[#fbd965] shadow-sm" />
                        <span className="text-sm font-semibold text-stone-700">Active ({activeCount})</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-xl bg-white/50 border border-white/40">
                        <div className="w-3 h-3 rounded-full bg-stone-200 shadow-sm" />
                        <span className="text-sm font-semibold text-stone-700">Inactive ({inactiveCount})</span>
                    </div>
                </div>
            </div>

            <div className="relative h-[250px] w-full md:w-[350px] flex items-center justify-center mt-6 md:mt-0 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="70%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={80}
                            outerRadius={100}
                            paddingAngle={isEmpty ? 0 : 5}
                            cornerRadius={10}
                            dataKey="value"
                            stroke="none"
                            label={isEmpty ? undefined : ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                if (!percent || percent <= 0) return null;

                                const RADIAN = Math.PI / 180;
                                // Default to 0 if midAngle is undefined, though it should be present for visible slices
                                const angle = midAngle ?? 0;
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                const x = cx + radius * Math.cos(-angle * RADIAN);
                                const y = cy + radius * Math.sin(-angle * RADIAN);
                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        fill="#1c1917"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        className="text-[10px] font-bold"
                                    >
                                        {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                );
                            }}
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        {!isEmpty && (
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                }}
                                itemStyle={{ color: '#1c1917', fontWeight: 600 }}
                            />
                        )}
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text Overlay */}
                <div className="absolute left-1/2 top-[65%] -translate-x-1/2 flex flex-col items-center text-center">
                    <span className="text-3xl font-bold text-stone-900">{users.length}</span>
                    <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Total Users</span>
                </div>
            </div>
        </motion.div>
    );
}
