import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Cep from './pages/Cep.jsx'
import Movies from './pages/Movies.jsx'
import TopRated from './pages/TopRated.jsx'
import { Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,

    children: [
      {index: true, element: <Home/>},
      {path: 'cep', element: <Cep/>},
      {path: 'movies', element: <Movies/>, children: [
        {index: true, element: <Navigate to='top_rated'/>},
        {path: 'top_rated', element: <TopRated/>}
      ]}
    ]
  }]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
