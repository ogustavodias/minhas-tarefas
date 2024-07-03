// Styled-components
import styled from 'styled-components'

// Style global configs
import fonts from '../../styles/configs/fonts'
import colors from '../../styles/configs/colors'

export const AddIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
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
`
