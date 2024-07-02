// External
import React from 'react'

// Internal
import * as S from './styles'

type Props = React.HTMLAttributes<HTMLLIElement> & {
  count: number
  label: string
  active?: boolean
}

const Filteritem = ({ count, label, active, ...props }: Props) => {
  return (
    <S.Card className={active ? 'active' : ''} {...props}>
      <S.Counter>{count}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default Filteritem
