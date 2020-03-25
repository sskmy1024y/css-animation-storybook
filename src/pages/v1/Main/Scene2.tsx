import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Initializing from 'components/PsychoPass/Initializing'
import ProfileCard from 'components/PsychoPass/ProfileCard'
import { fadeIn } from 'libs/keyframe'
import { zoomIn, zoomAndFadeIn, zoomInToAnyScale } from 'libs/keyframe/zoom'
import CatIcon from 'components/icons/Cat'
import { Colors } from 'libs/Colors'

interface Props {
  delay: number
}

export default function Scene2({ delay }: Props) {
  return (
    <Container delay={delay}>
      <CenterIconWrapper>
        <CatIcon />
      </CenterIconWrapper>
      <BackCircle />
    </Container>
  )
}

const zoomAndFadeInOver = keyframes`
  from { transform: scale(0); }
  to { transform: scale(3); }
`

const increaseSize = keyframes`
  from {
    width: 0%;
    height: 0%;
  }
  to {
    width: 80vw;
    height: 80vw;
  }
`

const slideCircleLeft = keyframes`
  from { left: 0; }
  to { left: -80%; }
`

const CenterIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  opacity: 0;
`

const BackCircle = styled.div`
  position: absolute;
  width: 0;
  height: 0;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid ${Colors.white};
    opacity: 0;
  }
`

const Container = styled.div<{ delay: number }>`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  /* アニメーション */
  ${({ delay }) => css`
    ${CenterIconWrapper} {
      animation: ${fadeIn} 0.3s ease ${delay}s forwards,
        ${slideCircleLeft} 0.2s ease ${delay + 1.25}s forwards;

      > svg {
        animation: ${zoomInToAnyScale(3)} 0.3s ease ${delay}s forwards;
      }
    }

    ${BackCircle} {
      animation: ${increaseSize} 0.5s ease ${delay + 0.5}s forwards;

      &:after {
        animation: ${fadeIn} 0.5s ease ${delay + 0.5}s forwards;
      }
    }
  `}
`
