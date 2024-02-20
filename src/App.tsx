// Externs
import React from 'react'

// Interns
import * as S from './styles/App'
import Filterbar from './components/Filterbar'
import Tasks from './components/Tasks'

function App() {
  return (
    <S.Container>
      <Filterbar />
      <Tasks />
    </S.Container>
  )
}

export default App
