import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'



const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}/>
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
