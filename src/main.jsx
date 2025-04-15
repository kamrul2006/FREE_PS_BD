import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// for react router--------------------------
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// ---------------------------------------------

import MainLayout from './Layouts/MainLayout';
import ErrorPage from './Fixed_Components/ErrorPage';
import HomeLayouts from './Layouts/HomeLayouts';
import AuthProvider from './Providers/AuthProvider';
import SignUpSection from './Auth/SignUp';
import LoginPage from './Auth/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayouts />
      },
      {
        path: "/Signup",
        element: <SignUpSection />
      },
      {
        path: "/Login",
        element: <LoginPage />
      },
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