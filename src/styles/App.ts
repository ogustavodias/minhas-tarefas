import styled from 'styled-components'
import fonts from './configs/fonts'

const Container = styled.div`
  display: grid;
  grid-template-columns: 224px 1fr;
  font-family: ${fonts.roboto};
  font-size: 16px;
  font-weight: 400;
`

export default Container
