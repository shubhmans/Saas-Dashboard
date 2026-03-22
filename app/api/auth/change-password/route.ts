import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as bcrypt from 'bcryptjs';
import { verifyJWT, DEMO_USER } from '@/lib/auth';

// In a real app, this would update a database.
// For this demo, we'll simulate the process.
export async function POST(request: Request) {
  try {
    const token = cookies().get('auth-token')?.value;
    if (!token) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 });
    }

    const payload = await verifyJWT(token);
    if (!payload) {
      return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
    }

    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    // Check if current password matches (using DEMO_USER for simulation)
    const isMatch = bcrypt.compareSync(currentPassword, DEMO_USER.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, error: 'Incorrect current password' }, { status: 400 });
    }

    if (newPassword.length < 6) {
      return NextResponse.json({ success: false, error: 'New password must be at least 6 characters' }, { status: 400 });
    }

    // In a real app: await db.user.update({ where: { id: (payload as any).userId }, data: { password: hash(newPassword) } })
    console.log(`Password changed for user ${(payload as any).userId}`);

    return NextResponse.json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
