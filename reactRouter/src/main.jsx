import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import DashboardLayout from './DashboardLayout.jsx'
import LogLayout from './components/LogLayout.jsx'

import DashboardPage from './components/Dashboard.jsx'
import InvoicesPage from './components/Invoices.jsx'
import IndexPage from './components/IndexPage.jsx'
import SignInPage from './components/Sign-in.jsx'
import SignUpPage from './components/Sign-up.jsx'
import { ClerkProvider } from '@clerk/clerk-react'



const router = createBrowserRouter([
  {
    
    element:<LogLayout/>,
    children:[
      {
        path:"/",
        element:<IndexPage />
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/sign-in/*",
        element:<SignInPage/>
      },
      {
        path:"/sign-up/*",
        element:<SignUpPage/>
      },
      {
        element:<DashboardLayout/>,
        path : 'dashboard',
        children: [
          {
            path:'/dashboard',
            element: <DashboardPage/>
          },
          {
            path:'/dashboard/invoices',
            element: <InvoicesPage/>
          }
        ]
      },
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
     
      <RouterProvider router={router}/>
    
  </StrictMode>,
)
