import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { cn, formatCurrency, formatNumber } from '@/lib/utils';
import * as Icons from 'lucide-react';

interface KPICardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: number;
  period: string;
  icon: string;
  color: 'indigo' | 'emerald' | 'amber' | 'rose';
  index: number;
}

export function KPICard({ label, value, prefix, suffix, change, period, icon, color, index }: KPICardProps) {
  const Icon = (Icons as any)[icon] || Icons.HelpCircle;
  
  const colors = {
    indigo: "text-indigo-500 bg-indigo-500/10",
    emerald: "text-emerald-500 bg-emerald-500/10",
    amber: "text-amber-500 bg-amber-500/10",
    rose: "text-rose-500 bg-rose-500/10",
  };

  const isPositive = change >= 0;

  return (
    <Card className={cn(
      "kpi-card opacity-0 animate-[fadeUp_0.5s_ease-out_forwards]",
      `[animation-delay:${index * 150}ms]`
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-lg", colors[color])}>
            <Icon size={20} />
          </div>
          <div className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            isPositive ? "text-emerald-500 bg-emerald-500/10" : "text-rose-500 bg-rose-500/10"
          )}>
            {isPositive ? '+' : ''}{change}%
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.15em]">{label}</p>
          <h2 className="text-3xl font-black text-white tracking-tighter">
            {prefix}{prefix === '$' ? formatNumber(value) : value}{suffix}
          </h2>
          <div className="flex items-center gap-2">
            <div className={cn(
              "h-1 w-1 rounded-full",
              isPositive ? "bg-emerald-500" : "bg-rose-500"
            )} />
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{period}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
