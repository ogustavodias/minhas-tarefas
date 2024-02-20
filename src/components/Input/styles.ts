// External
import styled from 'styled-components'

// Internal
import colors from '../../styles/configs/colors'

export const Field = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.blackGray};
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${colors.blackGray};
    font-weight: 700;
  }
`
