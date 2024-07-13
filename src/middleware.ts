import { NextRequest, NextResponse } from 'next/server';

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

  if (authRoutes.some(pattern => matchesWildcard(request.nextUrl.pathname, pattern))) {
    const token = request.cookies.get('token');

    if (!token) {
      return NextResponse.redirect(LOGIN);
    }
  } else if (request.nextUrl.pathname === '/auth/login') {
    const token = request.cookies.get('token');
    if (token) {
      return NextResponse.redirect(TORNEOS);
    }
  }

  return NextResponse.next();
}
