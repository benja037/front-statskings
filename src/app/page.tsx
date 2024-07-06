
import ClientComponent from './ClientComponent';
import HeaderPrincipal from './components/HeaderPrincipal';
import StickyCursor from './components/stickyCursor';



const YourComponent = () => {
  return (
    <div>      
      <StickyCursor stickyElementSrc="/PelotaCursor.png" />
      <ClientComponent />
    </div>
  );
};

export default YourComponent;
