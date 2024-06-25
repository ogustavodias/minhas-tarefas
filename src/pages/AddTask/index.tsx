import React from 'react'
import Input from '../../components/Input'

import * as S from './styles'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'

const AddTask = () => {
  return (
    <S.AddTask>
      <Input placeholder="Título" />
      <TextArea placeholder="Descrição" />
      <Button role="add" />
    </S.AddTask>
  )
}

export default AddTask
