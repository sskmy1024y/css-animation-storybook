import React from 'react'
import styled, { keyframes } from 'styled-components'
import InitialCard from 'components/PsychoPass/InitialCard'
import { zoomAndFadeIn, zoomAndFadeOut } from 'libs/keyframe/zoom'
import ProfileCard from 'components/PsychoPass/ProfileCard'
import DetailProfileCard from 'components/PsychoPass/DetailProfileCard'
import { media } from 'libs/Media'

interface Props {
  delay?: number
}

export default function Scene1({ delay = 0 }: Props) {
  return (
    <Container delay={delay}>
      <InitialCard />
      <SecondContainer>
        <ProfileCard delay={delay + 1000} />
      </SecondContainer>
      <ThirdContainer>
        <DetailProfileCard delay={delay + 4.7} />
      </ThirdContainer>
    </Container>
  )
}

const zoomAndFadeHalfOpacity = keyframes`
  from { 
    transform: scale(0);
    opacity: 0;
  }
  to { 
    transform: scale(1);
    opacity: 0.8;
  }
`

const SecondContainer = styled.div`
  position: absolute;
  top: 36%;
  left: 36%;
  z-index: 2;
  opacity: 0;
  transform-origin: 0 0;
`

const ThirdContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  opacity: 0;
  transform-origin: 0 0;
`

const Container = styled.div<{ delay: number }>`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  > * {
    opacity: 0;
    z-index: 1;
    transform-origin: 0 0;
  }

  ${SecondContainer},
  ${ThirdContainer} {
    ${media.smallDown} {
      display: flex;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  ${SecondContainer} {
    animation: ${zoomAndFadeHalfOpacity} 0.2s ease ${({ delay }) => `${delay + 4.2}s`} forwards,
      ${zoomAndFadeOut} 0.2s ease ${({ delay }) => `${delay + 5.5}s`} forwards;
  }

  ${ThirdContainer} {
    animation: ${zoomAndFadeIn} 0.2s ease ${({ delay }) => `${delay + 4.5}s`} forwards,
      ${zoomAndFadeOut} 0.2s ease ${({ delay }) => `${delay + 5.3}s`} forwards;
  }

  > *:first-of-type {
    animation: ${zoomAndFadeIn} 0.2s ease ${({ delay }) => `${delay}s`} forwards,
      ${zoomAndFadeOut} 0.2s ease ${({ delay }) => `${delay + 5.7}s`} forwards;
  }
`
