import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// for react router--------------------------
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Fixed_Components/NavBar';
import MainLayout from './Layouts/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
