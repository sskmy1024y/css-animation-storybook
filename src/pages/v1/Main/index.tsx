import React from 'react'
import styled from 'styled-components'

import Scene1 from './Scene1'
import Scene2 from './Scene2'

export default function Main() {
  return (
    <Container>
      <Scene1 delay={0} />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
`
