import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { NextUIProvider } from '@nextui-org/react';
import BreadcrumbList from './components/BreadcrumbList';
import { Loading } from './components/Loading'; // A loading spinner for suspense fallback

// Lazy-loaded components
const FormComponent = React.lazy(() => import('./components/FormComponent'));
const Blank = React.lazy(() => import('./pages/Blank'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const App: React.FC = () => {
  return (
    <NextUIProvider>
      <div className="text-black">
        <Navbar />
        <div className="pt-4 max-w-5xl mx-auto px-4 pb-12 min-h-[100vh]">
          <BreadcrumbList />

          {/* Wrap routes in Suspense for lazy-loaded components */}
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<>HOME</>} />
              <Route path="/dashboard" element={<>DASHBOARD</>} />
              <Route path="/lorem/donec" element={<FormComponent />} />
              <Route path="/lorem" element={<Blank />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        {/* Footer */}
        <div className="bg-[#D9D9D9] text-white text-center py-4 px-4 flex justify-center mt-6">
          <div className='flex justify-between max-w-5xl w-full'>
            <p className='text-black'>© 20XX All Rights Reserved.</p>
            <div className='flex gap-6'>
              <Link to='/contact' className='text-black underline'>CONTACT</Link>
              <Link to='/help' className='text-black underline'>HELP</Link>
            </div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default App;