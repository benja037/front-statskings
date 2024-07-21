// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken, resetAuthCookies } from '@/lib/actions';

const authRoutes = ['/app/*', '/account/*', '/api/*', '/admin/*', '/torneos', '/torneo/*', '/evento/*'];

function matchesWildcard(path: string, pattern: string): boolean {
  if (pattern.endsWith('/*')) {
    const basePattern = pattern.slice(0, -2);
    return path.startsWith(basePattern);
  }
  return path === pattern;
}

export async function middleware(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not set');    
  }

  const LOGIN = `${baseUrl}/auth/login?redirect=${request.nextUrl.pathname + request.nextUrl.search}`;
  const TORNEOS = `${baseUrl}/torneos`;

  const response = NextResponse.next();

  if (authRoutes.some(pattern => matchesWildcard(request.nextUrl.pathname, pattern))) {
    const token = request.cookies.get('session_access_token');

    if (!token) {
      response.cookies.set('isAuthenticated', 'false');
      return NextResponse.redirect(LOGIN);
    }

    try {
      const accessToken = await getAccessToken();
      if (!accessToken) {
        await resetAuthCookies(); // Handle this in a server action or route handler
        response.cookies.set('isAuthenticated', 'false');
        return NextResponse.redirect(LOGIN);
      } else {
        response.cookies.set('isAuthenticated', 'true');
      }
    } catch (error) {
      console.error('Error fetching access token:', error);
      response.cookies.set('isAuthenticated', 'false');
      return NextResponse.redirect(LOGIN);
    }
  } else if (request.nextUrl.pathname === '/auth/login') {
    const token = request.cookies.get('session_access_token');
    if (token) {
      response.cookies.set('isAuthenticated', 'true');
      return NextResponse.redirect(TORNEOS);
    } else {
      response.cookies.set('isAuthenticated', 'false');
    }
  } else {
    const token = request.cookies.get('session_access_token');
    if (token) {
      response.cookies.set('isAuthenticated', 'true');
    } else {
      response.cookies.set('isAuthenticated', 'false');
    }
  }

  return response;
}
