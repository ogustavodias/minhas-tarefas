// Externs
import React from 'react'

// Interns
import * as S from './styles/App'
import Sidenav from './components/Sidenav'
import Tasks from './pages/Tasks'
import AddIcon from './components/AddIcon'
import Header from './components/Header'
import AddTask from './pages/AddTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useRouter from './hooks/useRouter'

function App() {
  const routes = useRouter()

  return (
    <BrowserRouter>
      <S.Container>
        <Sidenav />
        <S.Content>
          <Header />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/adicionar" element={<AddTask />} />
          </Routes>
        </S.Content>
        <AddIcon />
      </S.Container>
    </BrowserRouter>
  )
}

export default App
