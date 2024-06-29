import { Middleware } from 'redux'

const localStorage: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const response = next(action)
    const { tasks } = getState()
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    return response
  }

export const getLocalStorage = (key: string) => {
  const value = window.localStorage.getItem('tasks')
  if (value) return JSON.parse(value)[key]
}

export default localStorage
