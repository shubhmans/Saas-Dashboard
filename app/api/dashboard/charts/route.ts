import { NextResponse } from 'next/server';
import { MOCK_REVENUE_DATA, MOCK_USER_GROWTH_DATA } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    data: { 
      revenue: MOCK_REVENUE_DATA, 
      userGrowth: MOCK_USER_GROWTH_DATA 
    } 
  });
}
