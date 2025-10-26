import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import FrontEndJourney from './pages/FrontEndJourney.jsx'

const GITHUB_PAGES_REPO_NAME = '/Rivensin-Portofolio'; 
const basename = process.env.NODE_ENV === 'production' ? GITHUB_PAGES_REPO_NAME : ''; 

const router = createHashRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {path: "/", element: <Home /> },
      {path: "/My-Frontend-Dev-Learning-Journey", element: <FrontEndJourney /> },
    ]
  }
  ],
  {basename: basename}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <RouterProvider router={router} />
  </StrictMode>,
)
