'use client';

import React from 'react';
import { Search, Bell, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-20 bg-[#050505]/60 backdrop-blur-xl border-b border-white/[0.08] flex items-center justify-between px-10 sticky top-0 z-40">
      <div className="relative w-96 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-500 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Search analytics, users, or settings..." 
          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 transition-all duration-300"
        />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-white transition-all duration-300 relative p-2 hover:bg-white/5 rounded-xl">
            <Bell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.8)]"></span>
          </button>
          <button className="text-gray-500 hover:text-white transition-all duration-300 p-2 hover:bg-white/5 rounded-xl">
            <HelpCircle size={20} />
          </button>
        </div>
        
        <div className="h-8 w-px bg-white/[0.08]"></div>
        
        <div className="flex items-center gap-6 pl-2">
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white leading-none mb-1">{user?.name}</p>
              <p className="text-[10px] uppercase font-black text-indigo-500 tracking-widest opacity-80">{user?.role}</p>
            </div>
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
              <img src={user?.avatar} alt={user?.name} className="relative h-10 w-10 rounded-full border-2 border-white/10 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <button 
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-xl transition-all duration-300 group"
          >
            <LogOut size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
