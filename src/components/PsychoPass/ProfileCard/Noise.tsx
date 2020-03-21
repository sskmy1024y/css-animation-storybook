import React from 'react'
import styled, { keyframes, css } from 'styled-components'

export enum DivSize {
  Auto = 'auto',
  Cover = 'cover'
}

interface Props {
  size?: DivSize
  delay?: number
  infinite?: number | false // interval
  children: React.ReactNode | string
}

export default function Noise({ size = DivSize.Auto, delay, infinite = false, children }: Props) {
  return (
    <>
      {[...Array(5)].map((_, key) => (
        <NoiseDiv key={key} size={size} delay={delay ?? 0} infinite={infinite}>
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

const noiseDelay1 = keyframes`
  0%, 1%, 100% { transform: translateX(0); }
  0.5% { transform: translateX(-30px); }
`

const noiseDelay2 = keyframes`
  0%, 1%, 100% { transform: translateX(0); }
  0.5% { transform: translateX(58px); }
`

const noiseDelay3 = keyframes`
  0%, 1%, 100% { transform: translateX(0); }
  0.33% { transform: translateX(46px); }
  0.66% { transform: translateX(-46px); }
`

const noiseDelay4 = keyframes`
  0%, 1%, 100% { transform: translateX(0); }
  0.5% { transform: translateX(-58px); }
`

const noiseDelay5 = keyframes`
  0%, 1%, 100% { transform: translateX(0); }
  0.5% { transform: translateX(30px); }
`

const NoiseDiv = styled.div<{ delay: number; size: DivSize; infinite: number | false }>`
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
  ${({ delay, infinite }) =>
    infinite
      ? css`
          &:nth-of-type(1) {
            animation: ${noise1} 0.12s ease-in-out ${`${delay}s`} forwards,
              ${noiseDelay1} 10s linear ${`${infinite + delay}s`} forwards infinite;
          }
          &:nth-of-type(2) {
            animation: ${noise2} 0.12s ease-in-out ${`${delay + 0.1}s`} forwards,
              ${noiseDelay2} 10s linear ${`${infinite + delay + 0.1}s`} forwards infinite;
          }
          &:nth-of-type(3) {
            animation: ${noise3} 0.12s ease-in-out ${`${delay + 0.1}s`} forwards,
              ${noiseDelay3} 10s linear ${`${infinite + delay + 0.1}s`} forwards infinite;
          }
          &:nth-of-type(4) {
            animation: ${noise4} 0.12s ease-in-out ${`${delay + 0.1}s`} forwards,
              ${noiseDelay4} 10s linear ${`${infinite + delay + 0.1}s`} forwards infinite;
          }
          &:nth-of-type(5) {
            animation: ${noise5} 0.12s ease-in-out ${`${delay}s`} forwards,
              ${noiseDelay5} 10s linear ${`${infinite + delay}s`} forwards infinite;
          }
        `
      : css`
          &:nth-of-type(1) {
            animation: ${noise1} 0.12s ease-in-out ${`${delay}s`} forwards;
          }
          &:nth-of-type(2) {
            animation: ${noise2} 0.12s ease-in-out ${`${delay + 0.1}s`} forwards;
          }
          &:nth-of-type(3) {
            animation: ${noise3} 0.12s ease-in-out ${`${delay + 0.1}s`} forwards;
          }
          &:nth-of-type(4) {
            animation: ${noise4} 0.12s ease-in-out ${`${delay + 0.1}s`} forwards;
          }
          &:nth-of-type(5) {
            animation: ${noise5} 0.12s ease-in-out ${`${delay}s`} forwards;
          }
        `}

  /* 親コンポーネントのサイズに合わせる */
  ${({ size }) =>
    size === DivSize.Cover &&
    css`
      width: 100%;
      height: 100%;
    `}
`
