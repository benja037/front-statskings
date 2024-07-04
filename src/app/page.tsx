
import { Metadata } from 'next'
import ClientComponent from './ClientComponent';

export const metadata: Metadata = {
  title: 'StatsKingsFutbol',
  icons: {
    icon: "/Logo.png",
  },
}

const YourComponent = () => {
  return (
    <div>
      <ClientComponent />
    </div>
  );
};

export default YourComponent;
