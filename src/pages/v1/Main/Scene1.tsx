import React from 'react'
import styled from 'styled-components'
import Initializing from 'components/PsychoPass/Initializing'

interface Props {
  delay: number
}

export default function Scene1({ delay }: Props) {
  return (
    <Container>
      <Initializing delay={delay} text='INITIALIZING' cat />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  > * {
    transform: scale(2);
  }
`
