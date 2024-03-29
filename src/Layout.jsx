import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
function Layout() {
  return (
    <>
       <ToastContainer theme="colored" />
      <div className="flex min-h-screen flex-col 00">
        <div className="flex-item">
          <div className="inner-flex-item"><Header /></div>
        </div>
        <div className=" flex flex-item flex-1 overflow-auto max-h-full">
          < ><Outlet /></>
        </div>
        <div className="flex-item ">
          <div className="inner-flex-item"><Footer /></div>
        </div>
      </div>

    </>
  )
}

export default Layout