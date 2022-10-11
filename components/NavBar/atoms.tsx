import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../designSystem'

export const NavBarContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  display: flex;
  padding-left: 165px;
  align-items: center;
`

export const NavItem = styled.a`
  text-transform: uppercase;
  margin: 0 48px;
  padding: 39px 0;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: ${props => props.color || colors.PRIMARY};
  cursor: pointer;

  display: inline-block;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.color || colors.PRIMARY};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after, &:focus:after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }

`

export const NavItemsContainer = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 165px 0 123px;
  counter-reset: list-number;

  ${NavItem}{
    &:before{
      counter-increment: list-number;
      content: counter(list-number, decimal-leading-zero);
      margin-right: 10px;
      font-weight: 700;
    }
  }
`

export const NavBarLine = styled.hr`
  position: relative;
  right: -64px;
  border: none;
  z-index: 1;
  border-top: 1px solid #fff;
  color: #fff;
  overflow: visible;
  text-align: center;
  flex: 1 1 473px;
`

export const Logo = styled(Image)`
  flex: 0 0 48px;
`