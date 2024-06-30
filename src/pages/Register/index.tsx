// React
import React, { FormEvent } from 'react'

// Styles
import * as S from './styles'

// Components
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import InputRadio from '../../components/InputRadio'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Models
import { ITask, add, selectCurrentId } from '../../redux/reducers/tasks'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [title, setTitle] = React.useState('')
  const [priority, setPriority] = React.useState('normal')
  const [description, setDescription] = React.useState('')

  const dispatch = useDispatch()
  const currentId = useSelector(selectCurrentId)
  const navigate = useNavigate()

  function addTask(e: FormEvent) {
    e.preventDefault()
    const task = {
      id: currentId,
      title,
      priority,
      status: 'pendente',
      description
    } as ITask

    dispatch(add(task))
    navigate('/')
  }

  return (
    <S.Wrapper onSubmit={addTask}>
      <Input
        placeholder="Título"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <TextArea
        placeholder="Descrição"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <InputRadio
        legend="Prioridade"
        options={['normal', 'importante', 'urgente']}
        priority={priority}
        setPriority={setPriority}
      />
      <Button role="add" type="submit" />
    </S.Wrapper>
  )
}

export default Register
