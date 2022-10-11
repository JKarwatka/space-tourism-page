import React from 'react'
import NavBar from '../NavBar'

type LayoutWithNavbarProps = {
  children: React.ReactNode
}

const LayoutWithNavbar = ({ children }:LayoutWithNavbarProps)  => (
  <>
    <NavBar/>
    {children}
  </>
)



export default LayoutWithNavbar