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
import ErrorPage from './Fixed_Components/ErrorPage';
import HomeLayouts from './Layouts/HomeLayouts';
import AuthProvider from './Providers/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayouts />
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

{/* <StrictMode>
<AuthProvider>
  <RouterProvider router={router}></RouterProvider>
</AuthProvider>
</StrictMode>, */}