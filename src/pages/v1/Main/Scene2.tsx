import React from 'react'
import styled from 'styled-components'
import Initializing from 'components/PsychoPass/Initializing'
import ProfileCard from 'components/PsychoPass/ProfileCard'
import { fadeIn } from 'libs/keyframe'
import { zoomIn, zoomAndFadeIn } from 'libs/keyframe/zoom'

interface Props {
  delay: number
}

export default function Scene2({ delay }: Props) {
  return <Container delay={delay}></Container>
}

const Container = styled.div<{ delay: number }>`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  > * {
    opacity: 0;
    transform-origin: 0 0;
    animation: ${zoomAndFadeIn} 0.2s ease ${({ delay }) => `${delay}s`} forwards;
  }
`
