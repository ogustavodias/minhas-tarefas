// Styled-components
import styled from 'styled-components'

// Styles global configs
import colors from '../../styles/configs/colors'

export const Wrapper = styled.aside`
  height: 100vh;
  background-color: ${colors.whiteGray};
  padding: 16px;
`
export const Back = styled.a`
  background-color: ${colors.darkBlue};
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;
`
