import React, { TextareaHTMLAttributes } from 'react'
import * as S from './styles'

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <S.Field {...props} />
}

export default TextArea
