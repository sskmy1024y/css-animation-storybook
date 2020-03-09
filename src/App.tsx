import './App.scss'
import React from 'react'
import ReactIcon from './components/icons/ReactIcon'
import styled, { keyframes } from 'styled-components'

function App() {
  return (
    <AppContainer>
      <Header>
        <SpinContainer>
          <ReactIcon />
        </SpinContainer>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </Link>
      </Header>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: '#FFF';
`

const Link = styled.a`
  color: #61dafb;
`

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinContainer = styled.div`
  animation: ${appLogoSpin} infinite 20s linear;
`
