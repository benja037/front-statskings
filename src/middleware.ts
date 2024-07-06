import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  // Definir rutas públicas
  const publicPaths = ["/", "/auth/login"];
  const pathname = request.nextUrl.pathname;

  // Verificar si la ruta actual es pública
  const isPublicPath = publicPaths.includes(pathname);

  //console.log("Current Pathname:", pathname);
  //console.log("Is Public Path:", isPublicPath);

  // Redirigir a la página de login si no tiene token y no es una ruta pública
  if (!accessToken && !isPublicPath) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y directorios
    "/((?!api|auth|_next/static|_next/image|favicon.ico|Logo.png).*)",
  ],
};
