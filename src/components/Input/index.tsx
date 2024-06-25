import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <S.Field {...props} type="text" />
}

export default Input
