// src/components/AuthProvider.tsx
import { cookies } from 'next/headers';
import { getUserId } from '@/lib/actions';
import HeaderPrincipal from './HeaderPrincipal';

export default async function AuthProvider({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get('isAuthenticated')?.value === 'true';
  let userEmail = null;

  if (isAuthenticated) {
    userEmail = await getUserId();
  }

  return (
    <div data-authenticated={isAuthenticated}>
      <HeaderPrincipal userEmail={userEmail} />
      {children}
    </div>
  );
}
