import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Landing Page Route */}
      <Route path='/' element={<LandingPage/>} />
      
      {/* Routes with Sidebar Layout */}
      <Route path='/dashboard' element={<Layout />}>
        {/* <Route path='about' element={<App />} /> */}
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
