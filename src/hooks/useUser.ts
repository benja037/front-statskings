import useSWR from 'swr';
import api from '@/lib/fetcher';

const fetcher = (url: string) => api.get(url).then(res => res.data);

export default function useUser() {
  const { data, error } = useSWR('/authenticate/users/me', fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
