import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Router/Router';

function App() {
  return (
    <div className="mx-auto">
       <RouterProvider router={router}/>
      <Toaster/>
    </div>
  );
}

export default App;
