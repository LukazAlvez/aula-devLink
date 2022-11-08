import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router';
import { GlobalStyles } from './styles/GlobalStyles';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <GlobalStyles />
    <RouterProvider router={router} />
  </div>,
);
