import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useRouteError } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Project from './components/Project.jsx'
import AddProject from './components/AddProject.jsx'
import DeleteProject from './components/DeleteProject.jsx'
import NoMatch from './components/NoMatch.jsx'
import UpdateProject from './components/UpdateProject.jsx'
import Home from './components/Home.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element ={ <Layout/> }>
      <Route index element={<Home />} /> {/* Render Home component at root path */}
      <Route  path='login' element ={ <Login/> }/>
      <Route  path='register' element ={ <Register/>  } errorElement={<ErrorBoundary />}/>
      <Route  path='project/' element ={ <Project/> }>       
        <Route  path=':id' element ={ <ProjectDetails/> }/>
      </Route>
      <Route  path='add' element ={ <AddProject/> }/>
      <Route  path='delete' element ={ <DeleteProject/> }/>
      <Route  path='update' element ={ <UpdateProject/> }/>


      <Route path="*" element={<NoMatch />} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <RouterProvider router={router} />
  // </React.StrictMode>,
)

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <div>{error.message}</div>;
}