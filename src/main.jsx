import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import FrontEndJourney from './pages/FrontEndJourney.jsx'
import Malice from './pages/Malice.jsx'
import HolyMother from './pages/HolyMother.jsx'

const router = createHashRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {path: "/", element: <Home /> },
      {path: "/My-Frontend-Dev-Learning-Journey", element: <FrontEndJourney /> },
      {path: "/Malice", element: <Malice /> },
      {path: "/HolyMother", element: <HolyMother /> },
    ]
  }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <RouterProvider router={router} />
  </StrictMode>,
)
