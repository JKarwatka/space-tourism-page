import React from 'react'
import { PageBackground, PageContainer } from '../../pages/home/atoms'
import NavBar from '../NavBar'
import { useRouter } from 'next/router'
import { getBackgroundForPage } from './helpers'

type LayoutWithNavbarProps = {
  children: React.ReactNode
}

const LayoutWithNavbar = ({ children }:LayoutWithNavbarProps)  => {
  const router = useRouter()
  console.error(router.pathname)
  const backgroundPath = getBackgroundForPage(router.pathname)
  return(
    <PageBackground backgroundPath={backgroundPath}>
      <PageContainer>
        <NavBar/>
        {children}
      </PageContainer>
    </PageBackground>
  )
}



export default LayoutWithNavbar