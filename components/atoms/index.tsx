import React from 'react'
import styled from 'styled-components'
import { colors } from '../designSystem'

export const H1 = styled.h1`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
  color: ${props => props.color || colors.PRIMARY};
`

export const H2 = styled.h2`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: ${props => props.color || colors.PRIMARY};
`

export const H3 = styled.h3`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: ${props => props.color || colors.PRIMARY};
`

export const H4 = styled.h4`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: ${props => props.color || colors.PRIMARY};
`

export const H5 = styled.h5`
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: ${props => props.color || colors.PRIMARY};
`
export const SubHeading1 = styled.h6`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${props => props.color || colors.PRIMARY};
`

export const SubHeading2 = styled.h6`
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  color: ${props => props.color || colors.PRIMARY};
`

export const NavText = styled.p`
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: ${props => props.color || colors.PRIMARY};
`

export const BodyText = styled.p`
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${props => props.color || colors.PRIMARY};
`

