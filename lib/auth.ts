import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'nexus_dashboard_jwt_secret_key_32chars_min';

export const DEMO_USER = {
  id: "usr_demo_001",
  email: "admin@dashboard.com",
  password: bcrypt.hashSync("Admin@123", 10),
  name: "Alex Morgan",
  role: "admin",
  avatar: "https://picsum.photos/seed/alexmorgan/40/40"
};

export async function signJWT(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export async function verifyJWT(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function setAuthCookie(token: string) {
  cookies().set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  });
}

export function clearAuthCookie() {
  cookies().delete('auth-token');
}
