// Externs
import React from 'react'

// Interns
import * as S from './styles'
import Filter from './Filter'
import { useLocation } from 'react-router-dom'

const Sidenav = () => {
  const { pathname } = useLocation()

  return (
    <S.Wrapper>
      {pathname === '/adicionar' ? (
        <S.Back href="/">Voltar a lista de tarefas</S.Back>
      ) : (
        <Filter />
      )}
    </S.Wrapper>
  )
}

export default Sidenav
