// Styles
import * as S from './styles'

// Components
import Filter from './Filter'

// React router dom
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
