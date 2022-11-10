import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router';
import { GlobalStyles } from './styles/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <GlobalStyles />
    <ToastContainer autoClose={1500} />
    <RouterProvider router={router} />
  </div>,
);
