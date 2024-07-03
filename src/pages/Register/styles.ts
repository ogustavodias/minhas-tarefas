// Styled-components
import styled from 'styled-components'

// Styles global configs
import colors from '../../styles/configs/colors'
import fonts from '../../styles/configs/fonts'

export const Wrapper = styled.form`
  max-width: 600px;

  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.blackGray};
  border-radius: 8px;
  outline: none;
  font-family: ${fonts.roboto};
  height: 200px;

  &::placeholder {
    color: ${colors.blackGray};
    font-weight: 700;
  }
`
export const Error = styled.p`
  background-color: ${colors.red};
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.whiteLight};
`
