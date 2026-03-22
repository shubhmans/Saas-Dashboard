'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Settings, 
  ShoppingBag
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Analytics', icon: BarChart2, href: '/dashboard/analytics' },
  { label: 'Users', icon: Users, href: '/dashboard/users' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-[#050505] border-r border-white/[0.08] flex flex-col z-50">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <ShoppingBag size={20} className="text-white" />
          </div>
          <span className="text-lg font-black text-white tracking-tighter uppercase">Shopping saga</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-indigo-600/10 text-indigo-400 shadow-[inset_0_0_20px_rgba(79,70,229,0.05)]" 
                  : "text-gray-500 hover:bg-white/[0.03] hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className={cn("transition-all duration-300", isActive ? "text-indigo-500" : "group-hover:scale-110")} />
                <span className="text-sm font-semibold tracking-tight">{item.label}</span>
              </div>
              {isActive && <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.8)]" />}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
