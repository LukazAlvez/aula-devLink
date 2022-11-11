import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { RedesSociais } from './pages/RedesSociais';

import Private from './routes/Private';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: '/admin/social',
    element: (
      <Private>
        <RedesSociais />
      </Private>
    ),
  },
  {
    path: '*',
    element: <Error />,
  },
]);
