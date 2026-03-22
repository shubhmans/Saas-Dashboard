import { NextResponse } from 'next/server';
import * as bcrypt from 'bcryptjs';
import { signJWT, setAuthCookie, DEMO_USER } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Email and password are required' }, { status: 400 });
    }

    // Check credentials (using hardcoded demo user)
    if (email === DEMO_USER.email && bcrypt.compareSync(password, DEMO_USER.password)) {
      const token = await signJWT({ userId: DEMO_USER.id, email: DEMO_USER.email, role: DEMO_USER.role });
      
      const response = NextResponse.json({ 
        success: true, 
        data: { id: DEMO_USER.id, email: DEMO_USER.email, name: DEMO_USER.name, role: DEMO_USER.role, avatar: DEMO_USER.avatar } 
      });

      // Set cookie
      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60,
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
