import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/content/AuthContext';
import Login from './pages/login/login';
import Authentication from './pages/login/authentication';
import DynamicRoutes from './DynamicRoutes';
import Home from './pages/home/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/authentication" element={<Authentication />} />
          <Route path="/*" element={<DynamicRoutes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
