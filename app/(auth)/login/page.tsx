'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@dashboard.com');
  const [password, setPassword] = useState('Admin@123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted');
    setError('');
    setIsLoading(true);

    try {
      console.log('Calling login function from AuthContext');
      await login(email, password);
      console.log('Login function completed');
    } catch (err: any) {
      console.error('Login error in component:', err);
      setError(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      
      <div className="w-full max-w-md space-y-10 relative z-10 animate-fade-up">
        <div className="text-center space-y-4">
          <div className="inline-flex h-14 w-14 bg-indigo-600 rounded-2xl items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] mb-2">
            <ShoppingBag size={28} className="text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Shopping saga</h1>
          <p className="text-gray-500 font-medium">Access your e-commerce analytics dashboard</p>
        </div>

        <Card className="border-white/[0.05] bg-white/[0.02] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Input 
                  label="Email Address" 
                  type="email" 
                  placeholder="Admin email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input 
                  label="Password" 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="bg-rose-500/5 border border-rose-500/20 text-rose-500 text-xs font-bold uppercase tracking-widest p-4 rounded-xl text-center">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                Sign In to Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center text-[10px] font-black text-gray-700 uppercase tracking-[0.2em]">
          <p>© 2026 Shopping saga • Secured by AES-256</p>
        </div>
      </div>
    </div>
  );
}
