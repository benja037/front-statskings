import { Metadata } from 'next';
import ClientComponent from './ClientComponent';
import Header from './components/Header';
import HeaderPrincipal from './components/HeaderPrincipal';

export const metadata: Metadata = {
  title: 'StatsKingsFutbol',
  icons: {
    icon: "/Logo.png",
  },
};

const YourComponent = () => {
  return (
    <div>      
      <HeaderPrincipal />
      <ClientComponent />
    </div>
  );
};

export default YourComponent;