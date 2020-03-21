import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Colors } from 'libs/Colors'
import { fadeIn } from 'libs/keyframe'

const MainColor = Colors.brand
const SubColor = '#1F1F1F'

interface CircleProps {
  size: number
  href?: string
  lineSize?: number
  duration?: number
  delay?: number
  children?: React.ReactNode
  onClick?(): void
}

function CircleButton({
  size,
  href,
  lineSize = 3,
  duration = 1,
  delay = 0,
  children,
  onClick
}: CircleProps) {
  return (
    <Container size={size} delay={delay}>
      <ButtonBackground>
        <BackInner />
      </ButtonBackground>
      <CircleContainer
        href={href}
        size={size}
        duration={duration}
        delay={delay}
        onClick={onClick}
        target='_blank'
        rel='noopener'
      >
        <CircleBody size={size} lineSize={lineSize} />
        <InnerContainer delay={delay}>{children}</InnerContainer>
      </CircleContainer>
    </Container>
  )
}

const RotateCircleLeft = keyframes`
  0%   {
    transform: rotate(0deg);
    background: ${SubColor};
  }
  50%  {
    transform: rotate(0deg);
    background: ${SubColor};
  }
  100% {
    background: ${MainColor};
    transform: rotate(360deg);
  }
`

const RotateCircleRight = keyframes`
  0%   {
    transform: rotate(0deg);
    background: ${SubColor};
  }
  50%  {
    transform: rotate(180deg);
    background: ${SubColor};
  }
  50.01%, 100% {
    transform: rotate(360deg);
    background: ${MainColor};
  }
`

const BackInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #fff;
  transform: scale(0);
  transition: transform 0.3s;
`

const ButtonBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

/* カーソルホバー時のアニメーション */
const Hovering = keyframes`
  0%, 100% { transform: scale(1.5); }
  50% { transform: scale(1.6); }
`

const CircleBody = styled.div<CircleProps>`
  position: absolute;
  width: ${props => props.size - (props.lineSize ?? 0) * 2}px;
  height: ${props => props.size - (props.lineSize ?? 0) * 2}px;
  background-color: ${SubColor};
  border-radius: 50%;
  z-index: 4;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.15s 0.1s;
  }
`

/* childrenコンテナ */
const InnerContainer = styled.div<{ delay: number }>`
  display: flex;
  position: absolute;
  color: ${Colors.white};
  z-index: 5;
  transition: color 0.3s;
  cursor: pointer;

  > * {
    opacity: 0;
    animation: ${fadeIn} 0.25s ease ${({ delay }) => `${delay + 1.1}s`} forwards;
  }
`

const Container = styled.div<CircleProps>`
  display: flex;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;

  /* ホバートリガー */
  &:hover {
    ${CircleBody} {
      &:after {
        transform: scale(1);
        transition: transform 0.3s;
      }
    }

    ${BackInner} {
      transform: scale(1.5);
      transition: transform 0.5s;

      animation: ${Hovering} 1s ease 0.3s forwards infinite;
    }

    ${InnerContainer} {
      color: ${SubColor};
      transition: color 0.3s;
    }
  }
`

const CircleContainer = styled.a<CircleProps>`
  position: relative;
  display: flex;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${MainColor};
  border-radius: 50%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: ${SubColor};
    transform-origin: right 50%;
    z-index: 2;
    animation: ${RotateCircleLeft} ${props => `${props.duration}s`} linear
      ${props => `${props.delay}s`} forwards;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 50%;
    width: 100%;
    height: 100%;
    background: ${SubColor};
    transform-origin: left 50%;
    z-index: 3;
    animation: ${RotateCircleRight} ${props => `${props.duration}s`} linear
      ${props => `${props.delay}s`} forwards;
  }
`

export default CircleButton
