import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyJWT, DEMO_USER } from '@/lib/auth';

export async function GET() {
  const token = cookies().get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 });
  }

  const payload = await verifyJWT(token);
  if (!payload) {
    return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
  }

  // Return user data (using hardcoded demo user for this example)
  return NextResponse.json({ 
    success: true, 
    data: { id: DEMO_USER.id, email: DEMO_USER.email, name: DEMO_USER.name, role: DEMO_USER.role, avatar: DEMO_USER.avatar } 
  });
}
