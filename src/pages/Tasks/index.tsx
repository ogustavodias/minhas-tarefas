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
        <Card key={item.id} title={item.title} />
      ))}
    </S.Tasks>
  )
}

export default Tasks
