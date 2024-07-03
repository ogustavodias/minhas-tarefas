// Typescript
import { InputHTMLAttributes } from 'react'

// Styles
import * as S from './styles'

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <S.Field {...props} type="text" />
}

export default Input
