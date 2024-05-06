import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import Inventory from '../pages/Inventory';
import Login from '../pages/Login';

const routerUser = createBrowserRouter([
    {path: '/', element: <Inventory />},
    {path: '/inventory', element: <Inventory />},
    {path: '/orders', element: <Orders />},
    {path: '*', element: <NotFound />}
  ]);

const routerDefault = createBrowserRouter([
  {path: '*', element: <Login />}
]);
  
export {routerUser, routerDefault};