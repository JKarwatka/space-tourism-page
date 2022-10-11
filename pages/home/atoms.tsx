import { motion } from 'framer-motion';
import styled from 'styled-components'


type PageBackgroundProps = {
  backgroundPath: string
}
export const PageBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${({backgroundPath}: PageBackgroundProps) => backgroundPath});
  background-position: center center;
  background-size: cover;
`

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0 165px 130px 165px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 450px;

`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const MainButton = styled(motion.div)`
  border-radius: 100%;
  width: 275px;
  height: 275px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px 10063px rgba(255, 255, 255, 0.1);
`