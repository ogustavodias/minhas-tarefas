// External
import React, { MouseEventHandler } from 'react'

// Internal
import * as S from './styles'

type ButtonClickHandler = MouseEventHandler<HTMLButtonElement>

export type Props = {
  role: 'save' | 'add' | 'remove' | 'cancel' | 'edit'
  setInEditing?: ButtonClickHandler
}

const Button = ({ role, setInEditing }: Props) => {
  const handleClick = setInEditing
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
    <S.Button type="button" role={role} onClick={handleClick}>
      {label}
    </S.Button>
  )
}

export default Button
