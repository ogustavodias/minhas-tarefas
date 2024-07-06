// Styles
import * as S from './styles'

// React Router Dom
import { useLocation } from 'react-router-dom'

const AddIcon = () => {
  const { pathname } = useLocation()

  if (pathname === '/adicionar') return null

  // Else
  return <S.AddIcon href="/adicionar">+</S.AddIcon>
}

export default AddIcon
