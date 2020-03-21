import React from 'react'
import styled, { keyframes } from 'styled-components'
import NormalIndicator from './Indicator'
import CatIndicator from './CatIndicator'

const SidePadding = 60

interface Props {
  cat?: boolean
  delay?: number
}

function SlideIndicator({ cat = false, delay = 0 }: Props) {
  const Indicator = cat ? CatIndicator : NormalIndicator

  return (
    <Container>
      {[...Array(4)].map((_, index) => (
        <IndicatorWrapper index={index + 1} key={index} delay={delay}>
          <Indicator>
            <InnerBox index={index + 1} delay={delay} />
          </Indicator>
        </IndicatorWrapper>
      ))}
    </Container>
  )
}

const SlideIn = keyframes`
  from { transform: translateX(425%); }
  to { transform: translateX(0%); }
`

const SlideOut = keyframes`
  from { transform: translateX(0%); opacity: 1; }
  to { transform: translateX(-425%); opacity: 0; }
`

const InitCheckColor = keyframes`
  from { background-color: rgba(255,255,255,0.16) }
  to { background-color: rgba(0, 255, 254, 0.48); }
`

const InitedFlash = keyframes`
  0% { background-color: rgba(0, 255, 254, 0.48); }
  50% { background-color: rgba(0, 255, 254, 1); }
  100% { background-color: rgba(0, 255, 254, 0.48); }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: calc(48px * 4 + 4px * 3);
  padding: 0 ${SidePadding}px;
  box-sizing: content-box;

  > * + * {
    margin-left: 4px;
  }
`

const IndicatorWrapper = styled.div<{ index: number; delay: number }>`
  transform: translateX(calc(48px * 4 + 4px * 3 + ${SidePadding}px + 1px));
  animation: ${SlideIn} 0.15s ease ${props => `${props.delay + 1 + props.index * 0.15}s`} forwards,
    ${SlideOut} 0.25s ease ${props => `${props.delay + 3.15 + props.index * 0.15}s`} forwards;
`

const InnerBox = styled.div<{ index: number; delay: number }>`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.16);

  animation: ${InitCheckColor} 0.2s ease ${props => `${props.delay + 1.8 + props.index * 0.2}s`}
      forwards,
    ${InitedFlash} 0.5s ease ${props => props.delay + 2.9}s forwards;
`

export default SlideIndicator
