// Externs
import React, { useEffect } from 'react'

// Interns
import * as S from './styles'
import Input from '../../Input'
import Filteritem from './Filteritem'
import { useDispatch, useSelector } from 'react-redux'
import {
  filtrate,
  FilterType,
  selectCurrentFilters,
  selectTasksBySearch
} from '../../../redux/reducers/tasks'

const Filter = () => {
  const { marker } = useSelector(selectCurrentFilters)
  const [activeMarker, setActiveMarker] = React.useState<FilterType>(marker)
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
          active={activeMarker === 'pendente'}
          onClick={() => setActiveMarker('pendente')}
        />
        <Filteritem
          count={completed.length}
          label="concluídas"
          active={activeMarker === 'concluído'}
          onClick={() => setActiveMarker('concluído')}
        />
        <Filteritem
          count={normal.length}
          label="urgentes"
          active={activeMarker === 'urgente'}
          onClick={() => setActiveMarker('urgente')}
        />
        <Filteritem
          count={important.length}
          label="importantes"
          active={activeMarker === 'importante'}
          onClick={() => setActiveMarker('importante')}
        />
        <Filteritem
          count={urgent.length}
          label="normal"
          active={activeMarker === 'normal'}
          onClick={() => setActiveMarker('normal')}
        />
        <Filteritem
          count={all.length}
          label="todas"
          active={activeMarker === 'todas'}
          onClick={() => setActiveMarker('todas')}
        />
      </S.List>
    </>
  )
}

export default Filter
