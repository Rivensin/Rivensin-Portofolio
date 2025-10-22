import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FrontEndJourney from './pages/FrontEndJourney.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {path: "/", element: <Home /> },
      {path: "/My-Frontend-Dev-Learning-Journey", element: <FrontEndJourney /> },
    ]
  }
  ],
  { basename: "/Rivensin-Portofolio"}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
