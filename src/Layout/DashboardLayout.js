import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../Components/Dashboard/SideNavbar'
import Footer from '../Components/Footer'

export default function DashboardLayout() {
  return (
    <>
      <div className="flex">
      <SideNavbar className="grow" />
      <Outlet />
      </div>
      <Footer/>
    </>
  )
}
