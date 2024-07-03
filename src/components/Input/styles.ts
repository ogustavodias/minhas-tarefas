// Styled-components
import styled from 'styled-components'

// Styles global configs
import colors from '../../styles/configs/colors'
import fonts from '../../styles/configs/fonts'

export const Field = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.blackGray};
  border-radius: 8px;
  outline: none;
  font-family: ${fonts.roboto};

  &::placeholder {
    color: ${colors.blackGray};
    font-weight: 700;
  }
`
