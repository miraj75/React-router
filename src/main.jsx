import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import About from './Components/About/About.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Products from './Components/Products/Products.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App> </App>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/home",
        element:<Home> </Home>,
      
    },
    {
      path: "/blog",
      element:<Blog></Blog>,
  },
  {
    path: "/about",
    element:<About></About>,
},
{
  path: "/product",
  loader:()=> fetch('Player.json'),
  element:<Products></Products>,
},
{
  path: "/contact",
  element:<Contact></Contact>,
},
  ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
