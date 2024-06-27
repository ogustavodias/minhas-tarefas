// React Router DOM
import { createBrowserRouter } from 'react-router-dom'

// Pages
import Tasks from '../pages/Tasks'
import AddTask from '../pages/AddTask'

const useRouter = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Tasks />
    },
    {
      path: '/adicionar',
      element: <AddTask />
    }
  ])

  return routes
}

export default useRouter
