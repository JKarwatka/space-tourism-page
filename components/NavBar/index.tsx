import React from 'react'
import Image from 'next/image'
import { NavText } from '../atoms'
import { ItemsContainer, NavBarContainer, NavBarLine } from './atoms'

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Image  src="/assets/homepage/logo.svg" alt="me" width="48" height="48"/>
      <NavBarLine/>
      <ItemsContainer>
        <NavText>Homes</NavText>
        <NavText>Destination</NavText>
        <NavText>Crew</NavText>
        <NavText>Technology</NavText>
      </ItemsContainer>
    </NavBarContainer>
  )
}
