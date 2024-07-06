// Styled-components
import styled, { keyframes } from 'styled-components'

// Style global configs
import fonts from '../../styles/configs/fonts'
import colors from '../../styles/configs/colors'

const pulse = keyframes`
  from {
    transform: scale(.9)
  } to {
    transform: initial
  }
`

export const AddIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: ${colors.green};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-family: ${fonts.roboto};
  color: ${colors.white};
  animation: ${pulse} 0.8s linear alternate infinite;
`
