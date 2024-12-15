import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Remove '/' from the matcher to make the landing page public
  matcher: ['/:id', '/api/:path*', '/login', '/register'],
};
