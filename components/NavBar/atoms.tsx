import React from 'react'
import styled from 'styled-components'

export const NavBarContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  display: flex;
  padding-left: 165px;
  align-items: center;
`

export const ItemsContainer = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 165px 0 123px;
`

export const NavBarLine = styled.hr`
  width: 400px;
  margin-left: 64px;
  border: none;
  border-top: 1px solid #fff;
  color: #fff;
  overflow: visible;
  text-align: center;
`