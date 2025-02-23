import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from './HomeLayouts/HomeLayout';
import Home from './pages/Home';
import CategoryLayout from './CategoryLayout/CategoryLayout';
import Category from './pages/Category';


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
      },
      {
        path: '/category',
        element: <CategoryLayout />,
        children: [
        {
          index: true,
          element: <Category />
        },
       
        ]
      }
  ])
   return <RouterProvider router={route} />;
}

export default App