// React
import React from 'react'

// Styles
import * as S from './styles'

// Components
import Button from '../Button'

// Models
import { ITask, edit, remove } from '../../redux/reducers/tasks'

// Redux
import { useDispatch } from 'react-redux'

const Card = (task: ITask) => {
  const [inEditing, setInEditing] = React.useState(false)
  const [description, setDescription] = React.useState(task.description)
  const [status, setStatus] = React.useState(task.status)
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

  const dispatch = useDispatch()

  function removeTask() {
    dispatch(remove(task.id))
  }

  function handleCheck() {
    const newStatus = status === 'concluído' ? 'pendente' : 'concluído'
    setStatus(newStatus)
    const newTask: ITask = { ...task, status: newStatus }
    dispatch(edit(newTask))
  }

  function save() {
    const newTask: ITask = { ...task, description, status }
    dispatch(edit(newTask))
    if (inEditing) setInEditing(false)
  }

  function cancelEdit() {
    setDescription(task.description)
    setInEditing(false)
  }

  // Efeito para focar o textarea quando inEditing === true
  React.useEffect(() => {
    if (inEditing && textareaRef.current) textareaRef.current.focus()
  }, [inEditing])

  return (
    <S.Wrapper>
      <S.Title htmlFor={`${task.id}`}>
        <input
          type="checkbox"
          id={`${task.id}`}
          checked={status === 'concluído'}
          onChange={handleCheck}
        />
        {task.title}
      </S.Title>
      <S.Posters>
        <S.Poster type="priority">{task.priority}</S.Poster>
        <S.Poster type="status">{task.status}</S.Poster>
      </S.Posters>
      <S.Description
        value={description}
        disabled={!inEditing}
        ref={textareaRef}
        editing={`${inEditing}`}
        onChange={({ target }) => setDescription(target.value)}
      />
      <S.ActionBar>
        {inEditing ? (
          <>
            <Button role="save" onClick={() => save()} />
            <Button role="cancel" setInEditing={cancelEdit} />
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
