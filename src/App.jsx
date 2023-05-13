import { GlobalProvider } from './context/GlobalState'
import React from 'react';
import Main from './components/Main/Main'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
    <GlobalProvider>
      <Header />
      <Main />
    </GlobalProvider>
    </>
    )
}

export default App