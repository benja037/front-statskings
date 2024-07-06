'use client';

import React from 'react';
import useUser from '@/hooks/useUser';
import HeaderPrincipal from './components/HeaderPrincipal';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  return (
    <>
      <HeaderPrincipal user={user} />
      {children}
    </>
  );
};

export default ClientProvider;
