// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import BreadcrumbList from './components/BreadcrumbList';
import NotFound from './components/NotFound'; // Import the NotFound component
import FormComponent from './components/FormField';
import Blank from './pages/Blank';

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className="text-black">
        <Navbar />
        <div className="pt-4 max-w-5xl mx-auto px-4">
          <BreadcrumbList />

          <Routes>
            <Route path="/" element={<>HOME</>} />
            <Route path="/dashboard" element={<>DASHBOARD</>} />
            <Route path="/lorem/donec" element={<FormComponent />} />
            <Route path="/lorem" element={<Blank />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default App;
