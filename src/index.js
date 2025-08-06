import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import ThemeContext from './contexts/ThemeContext';
import ThemeProvider from './providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
);




