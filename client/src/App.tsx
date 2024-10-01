// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button, NextUIProvider } from '@nextui-org/react';
import BreadcrumbList from './components/BreadcrumbList';
import NotFound from './components/NotFound'; // Import the NotFound component
import FormComponent from './components/FormComponent';
import Blank from './pages/Blank';

const API_URL = import.meta.env.VITE_API_URL;

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  const navigate = useNavigate();
  const [data, setData] = React.useState(null);

  const handlePress = () => {
    fetch(`${API_URL}/api/endpoint`) // Adjust this to your actual API endpoint
      .then(response => { console.log(response); return response.json() })
      .then(data => { console.log(data); setData(data.message) })
      .catch(error => console.error('Error fetching data:', error));
  }


  return (
    <NextUIProvider navigate={navigate}>
      <div className="text-black">
        <Navbar />
        <div className="pt-4 max-w-5xl mx-auto px-4 pb-12 min-h-[100vh]">
          <BreadcrumbList />
          <Routes>
            <Route path="/" element={<>HOME</>} />
            <Route path="/dashboard" element={<>DASHBOARD</>} />
            <Route path="/lorem/donec" element={<FormComponent />} />
            <Route path="/lorem" element={<Blank />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="bg-[#D9D9D9] text-white text-center py-4 px-4 flex justify-center mt-6">
          <div className='flex justify-between max-w-5xl w-full'>
            <p className='text-black'>© 20XX All Rights Reserved.</p>
            <div className='flex gap-6'>
              <Link to='/contact' className='text-black underline'>CONTACT</Link>
              <Link to='/contact' className='text-black underline'>HELP</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </NextUIProvider>
  );
};

export default App;
