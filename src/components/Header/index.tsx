// Styles
import * as S from './styles'

// Redux
import { useSelector } from 'react-redux'
import {
  selectCurrentFilters,
  selectTasksBySearchAndMarker
} from '../../redux/reducers/tasks'

// React router dom
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()
  const { marker, search } = useSelector(selectCurrentFilters)
  const count = useSelector(selectTasksBySearchAndMarker).length
  const plural = count > 1 ? 's' : ''

  return (
    <S.Header>
      {pathname === '/adicionar' ? (
        <p>Nova tarefa</p>
      ) : (
        <p>
          {count} tarefa{plural} marcada{plural} como: &quot;
          {marker.value}&ldquo; e &quot;{search}&ldquo;
        </p>
      )}
    </S.Header>
  )
}

export default Header
