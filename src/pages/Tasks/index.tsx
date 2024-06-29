// External
import React from 'react'

// Internal
import * as S from './styles'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import { selectAllTasks } from '../../redux/reducers/tasks'

const Tasks = () => {
  const tasks = useSelector(selectAllTasks)

  return (
    <S.Tasks>
      {tasks.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          priority={item.priority}
          status={item.status}
          description={item.description}
        />
      ))}
    </S.Tasks>
  )
}

export default Tasks
