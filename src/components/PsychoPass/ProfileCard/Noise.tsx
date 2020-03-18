import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  delay?: number
  children: React.ReactNode | string
}

export default function Noise({ delay, children }: Props) {
  return (
    <>
      {[...Array(5)].map((_, key) => (
        <NoiseDiv key={key} delay={delay ?? 0}>
          {children}
        </NoiseDiv>
      ))}
    </>
  )
}

const noise1 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(-30px); }
`

const noise2 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(58px); }
`

const noise3 = keyframes`
  from, to { transform: translateX(0); }
  33% { transform: translateX(46px); }
  66% { transform: translateX(-46px); }
`

const noise4 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(-58px); }
`

const noise5 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(30px); }
`

const NoiseDiv = styled.div<{ delay: number }>`
  &:first-of-type {
    position: relative;
    mask-image: linear-gradient(to bottom, black 0% 35%, transparent 35%);
  }
  &:not(:first-of-type) {
    position: absolute;
    top: 0;
    left: 0;
  }
  &:nth-of-type(2) {
    mask-image: linear-gradient(to bottom, transparent 0% 34%, black 35% 45%, transparent 45%);
  }
  &:nth-of-type(3) {
    mask-image: linear-gradient(to bottom, transparent 0% 45%, black 45% 55%, transparent 55%);
  }
  &:nth-of-type(4) {
    mask-image: linear-gradient(to bottom, transparent 0% 55%, black 55% 65%, transparent 65%);
  }
  &:nth-of-type(5) {
    mask-image: linear-gradient(to bottom, transparent 0% 65%, black 65%);
  }

  /* アニメーション */
  animation: 0.12s ease-in-out ${({ delay }) => `${delay + 1}s`} forwards;

  &:nth-of-type(1) {
    animation-name: ${noise1};
    animation-delay: ${({ delay }) => `${delay}s`};
  }
  &:nth-of-type(2) {
    animation-name: ${noise2};
    animation-delay: ${({ delay }) => `${delay + 0.1}s`};
  }
  &:nth-of-type(3) {
    animation-name: ${noise3};
    animation-delay: ${({ delay }) => `${delay + 0.1}s`};
  }
  &:nth-of-type(4) {
    animation-name: ${noise4};
    animation-delay: ${({ delay }) => `${delay + 0.1}s`};
  }
  &:nth-of-type(5) {
    animation-name: ${noise5};
    animation-delay: ${({ delay }) => `${delay}s`};
  }
`
