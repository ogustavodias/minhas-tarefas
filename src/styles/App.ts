// Styled-components
import styled from 'styled-components'

// Styles global configs
import fonts from './configs/fonts'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px 1fr;
  position: relative;
  font-family: ${fonts.roboto};
  font-size: 16px;
  font-weight: 400;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  padding: 40px;
  max-height: 100vh;
  overflow-y: auto;
`
