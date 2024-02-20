// External
import React from 'react'

// Internal
import * as S from './styles'
import Card from './Card'

const Tasks = () => {
  return (
    <S.Wrapper>
      <S.Header>
        2 tarefas marcadas como: &quot;todas&ldquo; e &quot;termo&ldquo;
      </S.Header>
      <S.List>
        <Card title="Estudar programação" />
        <Card title="Meditar" />
        <Card title="Ir ao mercado" />
      </S.List>
    </S.Wrapper>
  )
}

export default Tasks
