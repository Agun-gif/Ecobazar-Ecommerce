import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { RouterProvider } from 'react-router-dom'
import routers from './route/Basicroutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)
