import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Task {
  id: string
  title: string
  priority: 'normal' | 'importante' | 'urgente'
  status: 'pendente' | 'concluído'
  description: string
}

interface RootState {
  tasks: Task[]
}

const initialState: Task[] = [
  {
    id: '1',
    title: 'Estudar mais',
    priority: 'importante',
    status: 'pendente',
    description:
      'Estudar mais para conseguir minha primeira vaga como desenvolvedor.'
  }
]

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Task>) {
      state.push(action.payload)
    },

    remove(state, action: PayloadAction<string>) {
      const newState = state.filter((item) => item.id !== action.payload)
      state = [...newState]
    }
  }
})

export const selectAllTasks = (state: RootState) => state.tasks

export const { add, remove } = slice.actions

export default slice.reducer
