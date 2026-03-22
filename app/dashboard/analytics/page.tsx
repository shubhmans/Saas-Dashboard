'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { UserGrowthChart } from '@/components/dashboard/UserGrowthChart';
import { MOCK_REVENUE_DATA, MOCK_USER_GROWTH_DATA } from '@/lib/mockData';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Advanced Analytics</h1>
        <p className="text-gray-500 text-sm">Deep dive into your business performance and user behavior.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={MOCK_REVENUE_DATA} />
        <UserGrowthChart data={MOCK_USER_GROWTH_DATA} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Metric {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center border-2 border-dashed border-white/10 rounded-lg text-gray-500">
                Detailed Chart Placeholder
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
