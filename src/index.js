import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import ThemeProvider from './providers/ThemeProvider';
import LanguageProvider from './providers/LanguageProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LanguageProvider>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </LanguageProvider>
);




