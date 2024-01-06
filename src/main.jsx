import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Project from './components/Project.jsx'
import AddProject from './components/AddProject.jsx'
import DeleteProject from './components/DeleteProject.jsx'
import NoMatch from './components/NoMatch.jsx'
import UpdateProject from './components/UpdateProject.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element ={ <Layout/> }>
      <Route  path='login' element ={ <Login/> }/>
      <Route  path='register' element ={ <Register/> }/>
      <Route  path='project/' element ={ <Project/> }>       
        <Route  path=':id' element ={ <Project/> }/>
      </Route>
      <Route  path='add' element ={ <AddProject/> }/>
      <Route  path='delete' element ={ <DeleteProject/> }/>
      <Route  path='update' element ={ <UpdateProject/> }/>


      <Route path="*" element={<NoMatch />} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
