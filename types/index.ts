export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar: string;
}

export interface KPIData {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: number;
  period: string;
  icon: string;
  color: 'indigo' | 'emerald' | 'amber' | 'rose';
}

export interface ChartData {
  name: string;
  value: number;
  secondary?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
