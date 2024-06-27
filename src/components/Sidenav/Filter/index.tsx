// Externs
import React from 'react'

// Interns
import * as S from './styles'
import Input from '../../Input'
import Filteritem from './Filteritem'

const Filter = () => {
  return (
    <>
      <Input placeholder="Procurar" />
      <S.List>
        <Filteritem count={2} label="pendentes" />
        <Filteritem count={3} label="concluídas" />
        <Filteritem count={1} label="urgentes" />
        <Filteritem count={4} label="importantes" />
        <Filteritem count={2} label="normal" />
        <Filteritem count={12} label="todas" />
      </S.List>
    </>
  )
}

export default Filter
