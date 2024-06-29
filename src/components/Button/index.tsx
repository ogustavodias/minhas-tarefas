// External
import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'

// Internal
import * as S from './styles'

type ButtonClickHandler = MouseEventHandler<HTMLButtonElement>

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  role: 'save' | 'add' | 'remove' | 'cancel' | 'edit'
  setInEditing?: ButtonClickHandler
}

const Button = ({ role, setInEditing, ...props }: Props) => {
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
    <S.Button type="button" role={role} onClick={setInEditing} {...props}>
      {label}
    </S.Button>
  )
}

export default Button
