// External
import styled from 'styled-components'

// Internal
import fonts from '../../styles/configs/fonts'
import colors from '../../styles/configs/colors'

export const AddButton = styled.button`
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
