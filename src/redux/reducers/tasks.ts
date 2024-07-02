import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../middlewares/localStorage'
import { RootState } from '../configureStore'

export type Priority = 'normal' | 'importante' | 'urgente'
export type Status = 'pendente' | 'concluído'

export type FilterType = Priority | Status | 'todas'

export interface ITask {
  id: number
  title: string
  priority: Priority
  status: Status
  description: string
}

export interface IFilters {
  search: string
  marker: { key: 'status' | 'priority'; value: FilterType }
}

export interface Initial {
  list: ITask[]
  currentId: number
  filters: IFilters
}

const initialState: Initial = {
  list: getLocalStorage('list') || [],
  currentId: Number(getLocalStorage('currentId')) || 0,
  filters: { search: '', marker: { key: 'status', value: 'todas' } }
}

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add(state, action: PayloadAction<ITask>) {
      state.list.push(action.payload)
      state.currentId++
    },

    remove(state, action: PayloadAction<number>) {
      const newState = state.list.filter((item) => item.id !== action.payload)
      state.list = [...newState]
    },

    edit(state, action: PayloadAction<ITask>) {
      const newState = state.list.map((item) => {
        if (item.id === action.payload.id) return action.payload
        // Else
        return item
      })
      state.list = [...newState]
    },

    filtrate(state, action: PayloadAction<IFilters>) {
      state.filters.marker = action.payload.marker
      state.filters.search = action.payload.search
    }
  }
})

export const selectTasksBySearchAndMarker = ({ tasks }: RootState) =>
  tasks.list
    .filter((item) =>
      tasks.filters.search !== ''
        ? item.title.includes(tasks.filters.search)
        : item
    )
    .filter((item) => {
      if (tasks.filters.marker.value === 'todas') return item

      return item[tasks.filters.marker.key] === tasks.filters.marker.value
    })

export const selectTasksBySearch = ({ tasks }: RootState) =>
  tasks.list.filter((item) =>
    tasks.filters.search !== ''
      ? item.title.includes(tasks.filters.search)
      : item
  )

export const selectCurrentId = ({ tasks }: RootState) => tasks.currentId

export const selectCurrentFilters = ({ tasks }: RootState) => tasks.filters

export const { add, remove, edit, filtrate } = slice.actions

export default slice.reducer
