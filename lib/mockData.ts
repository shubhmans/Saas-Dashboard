import { KPIData, ChartData, User } from '../types';

export const MOCK_KPI_DATA: KPIData[] = [
  { label: "Total Revenue", value: 847293, prefix: "$", change: 12.5, period: "vs last month", icon: "DollarSign", color: "indigo" },
  { label: "Active Users", value: 24891, change: 8.2, period: "vs last month", icon: "Users", color: "emerald" },
  { label: "New Orders", value: 3847, change: -3.1, period: "vs last month", icon: "ShoppingCart", color: "amber" },
  { label: "Churn Rate", value: 2.4, suffix: "%", change: -0.8, period: "vs last month", icon: "TrendingDown", color: "rose" }
];

export const MOCK_REVENUE_DATA: ChartData[] = [
  { name: 'Jan', value: 45000 },
  { name: 'Feb', value: 52000 },
  { name: 'Mar', value: 48000 },
  { name: 'Apr', value: 61000 },
  { name: 'May', value: 55000 },
  { name: 'Jun', value: 67000 },
  { name: 'Jul', value: 72000 },
  { name: 'Aug', value: 69000 },
  { name: 'Sep', value: 81000 },
  { name: 'Oct', value: 78000 },
  { name: 'Nov', value: 85000 },
  { name: 'Dec', value: 92000 },
];

export const MOCK_USER_GROWTH_DATA: ChartData[] = [
  { name: 'Mon', value: 400, secondary: 240 },
  { name: 'Tue', value: 300, secondary: 139 },
  { name: 'Wed', value: 200, secondary: 980 },
  { name: 'Thu', value: 278, secondary: 390 },
  { name: 'Fri', value: 189, secondary: 480 },
  { name: 'Sat', value: 239, secondary: 380 },
  { name: 'Sun', value: 349, secondary: 430 },
];

export const MOCK_USERS: User[] = Array.from({ length: 50 }).map((_, i) => ({
  id: `usr_${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 5 === 0 ? 'admin' : 'user',
  avatar: `https://picsum.photos/seed/user${i + 1}/40/40`,
}));
