// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import BreadcrumbList from './components/BreadcrumbList';
import NotFound from './components/NotFound'; // Import the NotFound component

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className='text-black'>
        <Navbar />
        <BreadcrumbList />
        <Routes>
          <Route path="/" element={<>HOME</>} />
          <Route path="/dashboard" element={<>DASHBOARD</>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </NextUIProvider>
  );
};

export default App;