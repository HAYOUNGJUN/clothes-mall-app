import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      { path: '/product/:id', element: <Product /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
