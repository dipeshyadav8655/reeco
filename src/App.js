import NavBar from './component/Nav';
import OrderNumberTemplate from './component/OderNumberTemplate';
import ShipingDetails from './component/ShipingDetails';
import OrderDetails from './component/OrderDetail';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <OrderNumberTemplate />
    <ShipingDetails />
    <OrderDetails />
    </>
  );
}
export default App;
