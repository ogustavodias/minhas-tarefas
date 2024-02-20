import React from 'react'
import * as S from './styles'

type Props = {
  placeholder: string
}

const Input = ({ placeholder }: Props) => {
  return <S.Field placeholder={placeholder} />
}

export default Input
