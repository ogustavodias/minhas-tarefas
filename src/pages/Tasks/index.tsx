// External
import React from 'react'

// Internal
import * as S from './styles'
import Card from '../../components/Card'

const Tasks = () => {
  return (
    <S.Tasks>
      <Card title="Estudar programação" />
      <Card title="Meditar" />
      <Card title="Ir ao mercado" />
    </S.Tasks>
  )
}

export default Tasks
