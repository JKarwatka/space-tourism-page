import Link from 'next/link'
import React from 'react'
import { NavItemsContainer, Logo, NavBarContainer, NavBarLine, NavItem } from './atoms'

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo src="/assets/homepage/logo.svg" alt="me" width="48px" height="48px"/>
      <NavBarLine/>
      <NavItemsContainer>
        <Link href='/'>
          <NavItem>Home</NavItem>
        </Link>
        <Link href='/destination'>
          <NavItem>Destination</NavItem>
        </Link>
        <Link href='/crew'>
          <NavItem>Crew</NavItem>
        </Link>
        <Link href='/technology'>
          <NavItem>Technology</NavItem>
        </Link>
      </NavItemsContainer>
    </NavBarContainer>
  )
}

export default NavBar