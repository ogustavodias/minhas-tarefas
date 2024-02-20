// External
import React from 'react'

// Internal
import * as S from './styles'

export type Props = {
  role: 'save' | 'add' | 'remove' | 'cancel' | 'edit'
}

const Button = ({ role }: Props) => {
  const label =
    role === 'save'
      ? 'Salvar'
      : role === 'add'
      ? 'Cadastrar'
      : role === 'edit'
      ? 'Editar'
      : role === 'remove'
      ? 'Remover'
      : 'Cancelar'
  return (
    <S.Button type="button" role={role}>
      {label}
    </S.Button>
  )
}

export default Button
