// External
import React from 'react'

// Internal
import * as S from './styles'
import { Props } from '../index'

const Title = ({ title }: Props) => {
  return (
    <S.Wrapper htmlFor={title}>
      <input type="checkbox" id={title} />
      {title}
    </S.Wrapper>
  )
}

export default Title
