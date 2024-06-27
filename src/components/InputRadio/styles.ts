import styled from 'styled-components'

import fonts from '../../styles/configs/fonts'

export const Wrapper = styled.div`
  font-family: ${fonts.roboto};
  font-weight: 700;
  font-size: 14px;

  legend {
    margin-bottom: 6px;
  }
`

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  input {
    margin-right: 4px;
  }
`
