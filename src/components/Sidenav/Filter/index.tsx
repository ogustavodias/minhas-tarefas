// React
import React, { useEffect } from 'react'

// Styles
import * as S from './styles'

// Components
import Input from '../../Input'
import Filteritem from './Filteritem'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  filtrate,
  selectCurrentFilters,
  selectTasksBySearch
} from '../../../redux/reducers/tasks'

const Filter = () => {
  const { marker } = useSelector(selectCurrentFilters)
  const [activeMarker, setActiveMarker] = React.useState(marker)
  const [activeSearch, setActiveSearch] = React.useState('')

  const all = useSelector(selectTasksBySearch)
  const pending = all.filter((item) => item.status === 'pendente')
  const completed = all.filter((item) => item.status === 'concluído')
  const normal = all.filter((item) => item.priority === 'normal')
  const important = all.filter((item) => item.priority === 'importante')
  const urgent = all.filter((item) => item.priority === 'urgente')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filtrate({ search: activeSearch, marker: activeMarker }))
  }, [activeMarker, activeSearch, dispatch])

  return (
    <>
      <Input
        placeholder="Procurar"
        onChange={({ target }) => setActiveSearch(target.value)}
      />
      <S.List>
        <Filteritem
          count={pending.length}
          label="pendentes"
          active={activeMarker.value === 'pendente'}
          onClick={() => setActiveMarker({ key: 'status', value: 'pendente' })}
        />
        <Filteritem
          count={completed.length}
          label="concluídas"
          active={activeMarker.value === 'concluído'}
          onClick={() => setActiveMarker({ key: 'status', value: 'concluído' })}
        />
        <Filteritem
          count={urgent.length}
          label="urgentes"
          active={activeMarker.value === 'urgente'}
          onClick={() => setActiveMarker({ key: 'priority', value: 'urgente' })}
        />
        <Filteritem
          count={important.length}
          label="importantes"
          active={activeMarker.value === 'importante'}
          onClick={() =>
            setActiveMarker({ key: 'priority', value: 'importante' })
          }
        />
        <Filteritem
          count={normal.length}
          label="normal"
          active={activeMarker.value === 'normal'}
          onClick={() => setActiveMarker({ key: 'priority', value: 'normal' })}
        />
        <Filteritem
          count={all.length}
          label="todas"
          active={activeMarker.value === 'todas'}
          onClick={() => setActiveMarker({ key: 'status', value: 'todas' })}
        />
      </S.List>
    </>
  )
}

export default Filter
