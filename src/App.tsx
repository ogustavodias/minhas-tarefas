// React
import React from 'react'

// Redux
import { Provider } from 'react-redux'
import store from './redux/configureStore'

// React Router Dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Styles
import Sidenav from './components/Sidenav'

// Components
import * as S from './styles/App'
import AddIcon from './components/AddIcon'
import Header from './components/Header'

// Pages
import Register from './pages/Register'
import Tasks from './pages/Tasks'

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
              <Route path="/adicionar" element={<Register />} />
            </Routes>
          </S.Content>
          <AddIcon />
        </S.Container>
      </Provider>
    </BrowserRouter>
  )
}

export default App
