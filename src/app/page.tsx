import { Metadata } from 'next';
import ClientComponent from './ClientComponent';
import HeaderPrincipal from './components/HeaderPrincipal';
import StickyCursor from './components/stickyCursor';

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
      <StickyCursor stickyElementSrc="/PelotaCursor.png" />
      <ClientComponent />
    </div>
  );
};

export default YourComponent;
