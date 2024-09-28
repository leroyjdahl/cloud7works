// src/App.tsx
import React from 'react';

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div className="w-full">
      <h1>{message}</h1>
      <div className="text-center bg-blue-100 min-h-screen flex items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-blue-600">
          Testing Tailwind CSS
        </h1>
      </div>

      <h1 className="font-sans text-2xl font-bold">
        Testing font Donec Lorem Magna
      </h1>
      <h2 className="font-sans text-xl font-semibold">Heading 2 - Open Sans</h2>
      <p className="font-sans text-base">
        This is a paragraph with Source Sans Pro font.
      </p>
      <p className="font-sans text-base">
        This is another paragraph with Open Sans font.
      </p>
    </div>
  );
};

export default App;
