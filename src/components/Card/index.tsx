// External
import React, { useEffect, useRef, useState } from 'react'

// Internal
import * as S from './styles'
import Title from './Title'
import Button from '../Button'

export type Props = {
  title: string
}

const Card = ({ title }: Props) => {
  const [inEditing, setInEditing] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  // Efeito para focar o textarea quando inEditing === true
  useEffect(() => {
    if (inEditing && textareaRef.current) textareaRef.current.focus()
  }, [inEditing])

  return (
    <S.Wrapper>
      <Title title={title} />
      <S.Posters>
        <S.Poster type="priority">importante</S.Poster>
        <S.Poster type="status">concluído</S.Poster>
      </S.Posters>
      <S.Description
        value={'Tarefa teste'}
        disabled={!inEditing}
        ref={textareaRef}
        editing={`${inEditing}`}
      />
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
