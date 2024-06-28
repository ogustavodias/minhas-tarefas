// Externs
import React from 'react'
import { Provider } from 'react-redux'

// Interns
import * as S from './styles/App'
import Sidenav from './components/Sidenav'
import Tasks from './pages/Tasks'
import AddIcon from './components/AddIcon'
import Header from './components/Header'
import AddTask from './pages/AddTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from './redux/configureStore'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  )
}

export default App
