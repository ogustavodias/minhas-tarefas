// External
import styled from 'styled-components'

// Internal
import colors from '../../styles/configs/colors'

export const Wrapper = styled.main`
  padding: 40px;
  color: ${colors.black};
  font-weight: 700;
  max-height: 100vh;
  overflow-y: auto;
`

export const Header = styled.header`
  color: black;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
`
