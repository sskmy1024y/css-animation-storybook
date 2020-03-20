import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Colors } from 'libs/Colors'

const MainColor = Colors.brand
const SubColor = '#fff'

export interface CircleProps {
  size: number
  lineSize?: number
  duration?: number
  children?: React.ReactNode
}

function CircleButton({ size, lineSize = 3, duration = 0.5, children }: CircleProps) {
  return (
    <Container size={size}>
      <ButtonBackground>
        <BackInner />
      </ButtonBackground>
      <CircleContainer size={size} duration={duration}>
        <CircleBody size={size} lineSize={lineSize}>
          {children}
        </CircleBody>
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

const Hovering = keyframes`
  0%, 100% { transform: scale(1.5); }
  50% { transform: scale(1.6); }
`

const CircleBody = styled.div<CircleProps>`
  display: flex;
  width: ${props => props.size - (props.lineSize ?? 0) * 2}px;
  height: ${props => props.size - (props.lineSize ?? 0) * 2}px;
  background-color: #fff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  z-index: 4;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${Colors.black};
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.15s 0.1s;
  }
`

const Container = styled.div<CircleProps>`
  display: flex;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;

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
  }
`

const CircleContainer = styled.button<CircleProps>`
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
    animation: ${RotateCircleLeft} ${props => `${props.duration}s`} linear forwards;
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
    animation: ${RotateCircleRight} ${props => `${props.duration}s`} linear forwards;
  }
`

export default CircleButton
