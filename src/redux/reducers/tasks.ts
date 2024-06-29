import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../middlewares/localStorage'
import { RootState } from '../configureStore'

export type Priority = 'normal' | 'importante' | 'urgente'
export type Status = 'pendente' | 'concluído'

export interface ITask {
  id: number
  title: string
  priority: Priority
  status: Status
  description: string
}

export interface Initial {
  list: ITask[]
  currentId: number
}

const initialState: Initial = {
  list: getLocalStorage('list') || [],
  currentId: Number(getLocalStorage('currentId')) || 0
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
    }
  }
})

export const selectAllTasks = ({ tasks }: RootState) => tasks.list
export const selectCurrentId = ({ tasks }: RootState) => tasks.currentId

export const { add, remove } = slice.actions

export default slice.reducer
