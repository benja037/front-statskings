import { logout } from '@/lib/auth';

export async function GET() {
  logout();

  const response = {
    success: true,
    message: 'Logged out successfully',
  };

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
