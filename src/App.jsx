import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from './HomeLayouts/HomeLayout';
import Home from './pages/Home';

const App = () => {
  const route  = createBrowserRouter([
      {
        path:'',
        element: <HomeLayout /> ,
        children:[
          {
            index: true,
            element: <Home /> 
          }
        ]
      }
  ])
   return <RouterProvider router={route} />;
}

export default App