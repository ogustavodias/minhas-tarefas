// Styled-components
import styled, { keyframes } from 'styled-components'

// Styles global configs
import colors from '../../../../styles/configs/colors'

const pulseClick = keyframes`
  from {
    transform: scale(.9)
  }
  
  to {
    transform: initial
  }
`

export const Card = styled.li`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  background-color: ${colors.whiteLight};
  border: 1px solid ${colors.grayLight};
  color: ${colors.blackGray};
  &.active {
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    animation: ${pulseClick} 0.3s ease forwards;
  }
`
export const Counter = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
`
export const Label = styled.span`
  display: block;
  font-weight: 400;
  font-size: 14px;
`
