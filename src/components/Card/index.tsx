// React
import React from 'react'

// Styles
import * as S from './styles'

// Components
import Button from '../Button'

// Models
import { ITask, remove } from '../../redux/reducers/tasks'

// Redux
import { useDispatch } from 'react-redux'

const Card = ({ id, title, priority, status, description }: ITask) => {
  const [inEditing, setInEditing] = React.useState(false)
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

  const dispatch = useDispatch()

  function removeTask() {
    dispatch(remove(id))
  }

  // Efeito para focar o textarea quando inEditing === true
  React.useEffect(() => {
    if (inEditing && textareaRef.current) textareaRef.current.focus()
  }, [inEditing])

  return (
    <S.Wrapper>
      <S.Title htmlFor={title}>
        <input type="checkbox" id={title} checked={status === 'concluído'} />
        {title}
      </S.Title>
      <S.Posters>
        <S.Poster type="priority">{priority}</S.Poster>
        <S.Poster type="status">{status}</S.Poster>
      </S.Posters>
      <S.Description
        value={description}
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
            <Button role="remove" onClick={removeTask} />
          </>
        )}
      </S.ActionBar>
    </S.Wrapper>
  )
}

export default Card
