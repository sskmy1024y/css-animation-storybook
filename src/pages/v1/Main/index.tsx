import React from 'react'
import styled from 'styled-components'

import Scene1 from './Scene1'
import Scene2 from './Scene2'

export default function Main() {
  return (
    <Container>
      <Scene1 delay={0} />
      <Scene2 delay={4.5} />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`
