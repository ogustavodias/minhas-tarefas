// Externs
import styled from 'styled-components'

// Interns
import colors from '../../styles/configs/colors'

export const Wrapper = styled.aside`
  height: 100vh;
  background-color: ${colors.whiteGray};
  padding: 16px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`
