// Externs
import React from 'react'

// Interns
import * as S from './styles/App'
import Filterbar from './components/Filterbar'
import Tasks from './pages/Tasks'
import AddButton from './components/AddButton'
import Header from './components/Header'
import AddTask from './pages/AddTask'

function App() {
  return (
    <S.Container>
      <Filterbar />
      <S.Content>
        <Header />
        {/* <Tasks /> */}
        <AddTask />
      </S.Content>
      <AddButton />
    </S.Container>
  )
}

export default App
