// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";


interface AppProps {
  message: string;
}


const App: React.FC<AppProps> = ({ message }) => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className='text-black'>
        <Navbar />
        <Routes>
          <Route path="/" element={<>HOME</>} />
          <Route path="/dashboard" element={<>DAASHBOARD</>} />

        </Routes>
      </div>
    </NextUIProvider>
  );
};

export default App;
