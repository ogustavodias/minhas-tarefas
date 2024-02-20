// External
import React from 'react'

// Internal
import * as S from './styles'
import Title from './Title'

export type Props = {
  title: string
}

const Card = ({ title }: Props) => {
  return (
    <S.Wrapper>
      <Title title={title} />
    </S.Wrapper>
  )
}

export default Card
