import { NextResponse } from 'next/server';
import { MOCK_USERS } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({ success: true, data: MOCK_USERS });
}
