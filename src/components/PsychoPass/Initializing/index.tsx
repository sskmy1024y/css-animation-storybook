import React from 'react'
import SlideLetter from './SlideLetter'
import SlideIndicator from './SlideIndicator'
import styled from 'styled-components'

interface Props {
  text: string
}

export default function Initializing({ text }: Props) {
  return (
    <Container>
      <SlideLetter text={text} fontSize={28} />
      <SlideIndicator />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
    margin-top: 8px;
  }
`
