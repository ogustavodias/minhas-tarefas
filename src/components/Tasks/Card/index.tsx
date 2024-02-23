// External
import React, { useEffect, useState } from 'react'

// Internal
import * as S from './styles'
import Title from './Title'
import Button from '../../Button'

export type Props = {
  title: string
}

const Card = ({ title }: Props) => {
  const [inEditing, setInEditing] = useState(false)

  return (
    <S.Wrapper>
      <Title title={title} />
      <S.Posters>
        <S.Poster>importante</S.Poster>
        <S.Poster>urgente</S.Poster>
      </S.Posters>
      <S.Description value={'Tarefa teste'} />
      <S.ActionBar>
        {inEditing ? (
          <>
            <Button role="save" />
            <Button role="cancel" setInEditing={() => setInEditing(false)} />
          </>
        ) : (
          <>
            <Button role="edit" setInEditing={() => setInEditing(true)} />
            <Button role="remove" />
          </>
        )}
      </S.ActionBar>
    </S.Wrapper>
  )
}

export default Card
