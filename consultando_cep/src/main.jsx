import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Cep from './pages/Cep.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,

    children: [
      {index: true, element: <Home/>},
      {path: 'cep', element: <Cep/>}
    ]
  }]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
