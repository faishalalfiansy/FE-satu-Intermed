import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Beranda from './pages/Beranda.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/beranda",
    element: <Beranda />,
  }
])
createRoot(document.body).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
