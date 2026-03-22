import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-2 w-full">
      {label && <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{label}</label>}
      <input 
        className={cn(
          "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all duration-300",
          error && "border-rose-500/50 focus:ring-rose-500/20",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-rose-500 ml-1">{error}</p>}
    </div>
  );
}
