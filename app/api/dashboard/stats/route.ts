import { NextResponse } from 'next/server';
import { MOCK_KPI_DATA } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({ success: true, data: MOCK_KPI_DATA });
}
