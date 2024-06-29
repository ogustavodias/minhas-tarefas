import { configureStore } from '@reduxjs/toolkit'

// Reducers
import tasks, { Initial as InitialTasks } from './reducers/tasks'

// Middlewares
import localStorage from './middlewares/localStorage'

const store = configureStore({
  reducer: { tasks },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage)
})

export interface RootState {
  tasks: InitialTasks
}

export default store
