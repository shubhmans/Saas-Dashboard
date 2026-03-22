'use client';

import React, { useEffect, useState } from 'react';
import { KPICard } from '@/components/dashboard/KPICard';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { UserGrowthChart } from '@/components/dashboard/UserGrowthChart';
import { DataTable } from '@/components/dashboard/DataTable';
import { LoadingSkeleton } from '@/components/shared/LoadingSkeleton';
import { Button } from '@/components/ui/Button';
import { BarChart2 } from 'lucide-react';
import { KPIData, User } from '@/types';

export default function DashboardPage() {
  const [stats, setStats] = useState<KPIData[]>([]);
  const [charts, setCharts] = useState<any>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, chartsRes, usersRes] = await Promise.all([
          fetch('/api/dashboard/stats'),
          fetch('/api/dashboard/charts'),
          fetch('/api/dashboard/users'),
        ]);

        if (!statsRes.ok || !chartsRes.ok || !usersRes.ok) {
          throw new Error('Failed to fetch some dashboard data');
        }

        const [statsData, chartsData, usersData] = await Promise.all([
          statsRes.json(),
          chartsRes.json(),
          usersRes.json(),
        ]);

        setStats(statsData.data || []);
        setCharts(chartsData.data || {});
        setUsers(usersData.data || []);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-8"><LoadingSkeleton /></div>;

  if (!stats.length && !charts && !users.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
        <div className="p-4 rounded-full bg-white/5 border border-white/10">
          <BarChart2 className="text-gray-500" size={32} />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">No data available</h2>
          <p className="text-gray-500 text-sm">We couldn&apos;t load your dashboard data. Please try refreshing.</p>
        </div>
        <Button variant="secondary" onClick={() => window.location.reload()}>
          Refresh Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm">Welcome back! Here&apos;s what&apos;s happening with your SaaS today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <KPICard key={stat.label} {...stat} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueChart data={charts?.revenue || []} />
        <UserGrowthChart data={charts?.userGrowth || []} />
      </div>

      <DataTable users={users} />
    </div>
  );
}
