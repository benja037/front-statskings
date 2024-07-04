// app/components/Header.tsx
'use client';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex items-center">
      <Image src="/Logo.png" width={40} height={40} alt="Logo" />
      <h1 className="ml-4 text-2xl font-bold">StatsKingsFutbol</h1>
    </header>
  );
};

export default Header;