import React from 'react'
import styled, { keyframes } from 'styled-components'
import Indicator from './Indicator'

const SidePadding = 60
const startDelay = 0

function SlideIndicator() {
  return (
    <Container>
      {[0, 1, 2, 3].map(index => (
        <IndicatorWrapper index={index + 1} key={index}>
          <Indicator>
            <InnerBox index={index + 1} />
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
  from { background-color: rgba(255,255,255,0.32) }
  to { background-color: rgba(0, 255, 254, 0.72); }
`

const InitedFlash = keyframes`
  0% { background-color: rgba(0, 255, 254, 0.72); }
  50% { background-color: rgba(0, 255, 254, 1); }
  100% { background-color: rgba(0, 255, 254, 0.72); }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: calc(48px * 4 + 4px * 3);
  padding: 0 ${SidePadding}px;

  > * + * {
    margin-left: 4px;
  }
`

const IndicatorWrapper = styled.div<{ index: number }>`
  transform: translateX(calc(48px * 4 + 4px * 3 + ${SidePadding}px + 1px));
  animation: ${SlideIn} 0.15s ease ${props => `${startDelay + 1 + props.index * 0.15}s`} forwards,
    ${SlideOut} 0.25s ease ${props => `${startDelay + 3.15 + props.index * 0.15}s`} forwards;
`

const InnerBox = styled.div<{ index: number }>`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.32);

  animation: ${InitCheckColor} 0.2s ease ${props => `${startDelay + 1.8 + props.index * 0.2}s`}
      forwards,
    ${InitedFlash} 0.5s ease ${startDelay + 2.9}s forwards;
`

export default SlideIndicator
