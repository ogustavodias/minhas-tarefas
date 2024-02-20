// External
import React from 'react'

// Internal
import * as S from './styles'

type Props = {
  count: number
  label: string
  active?: boolean
}

const Filteritem = ({ count, label, active }: Props) => {
  return (
    <S.Card className={active ? 'active' : ''}>
      <S.Counter>{count}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default Filteritem
