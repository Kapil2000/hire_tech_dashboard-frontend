import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Resourcehirecucle from './components/Resourcehirecucle.jsx'
import Candidateshortlisted from './components/Candidateshortlisted.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/resource-hire-cycle' element={<Resourcehirecucle/>}></Route>
      <Route path='/candidate-shortlisted' element={<Candidateshortlisted/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
