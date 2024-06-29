import React, { FormEvent, FormEventHandler } from 'react'
import Input from '../../components/Input'

import * as S from './styles'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import InputRadio from '../../components/InputRadio'
import { useDispatch } from 'react-redux'
import { Task, add } from '../../redux/reducers/tasks'

const Register = () => {
  const [title, setTitle] = React.useState('')
  const [priority, setPriority] = React.useState('normal')
  const [description, setDescription] = React.useState('')

  const dispatch = useDispatch()

  function addTask(e: FormEvent) {
    e.preventDefault()
    const task = {
      id: '0',
      title,
      priority,
      status: 'pendente',
      description
    } as Task

    dispatch(add(task))
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
