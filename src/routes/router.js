import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import Inventory from '../pages/Inventory';

const router = createBrowserRouter([
    {path: '/', element: <Inventory />},
    {path: "/inventory", element: <Inventory />},
    {path: "/orders", element: <Orders />},
    {path: "*", element: <NotFound />}
  ]);
  
export {router};