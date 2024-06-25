import styled from 'styled-components'

import colors from '../../styles/configs/colors'
import fonts from '../../styles/configs/fonts'

export const AddTask = styled.form`
  max-width: 600px;

  *:not(:last-child) {
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
