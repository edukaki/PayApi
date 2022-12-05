import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './Routes/router';
import { RouterProvider } from 'react-router-dom'
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
