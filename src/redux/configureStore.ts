import { configureStore } from '@reduxjs/toolkit'

// Reducers
import tasks from './reducers/tasks'

const contador = () => 1

const store = configureStore({
  reducer: { tasks },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export default store
