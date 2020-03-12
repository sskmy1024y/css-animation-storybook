import React, { CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import AnimContainer, { AnimContainerProps } from 'components/Base/AnimContainer'
import { easeSlideTop, easeSlideBottom } from './keyframe'

interface Props extends AnimContainerProps {
  fontColor: string
  numbers: (number | string)[]
  direction: 'top' | 'bottom'
  className?: string & CSSProperties
}

export default function SlideNumber(props: Props) {
  return (
    <CharContainer {...props}>
      <div className='canvas'>
        <div className='num-container'>
          {(props.direction === 'top' ? props.numbers : props.numbers.reverse()).map(num => (
            <div className='num'>{num}</div>
          ))}
        </div>
      </div>
    </CharContainer>
  )
}

const CharContainer = styled(AnimContainer)<Props>`
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .num-container {
      position: absolute;
      left: 0;
      width: 50%;

      ${props =>
        props.direction === 'bottom'
          ? css`
              top: 0;
              transform: translateY(-101%);
            `
          : css`
              bottom: 0;
              transform: translateY(101%);
            `}

      .num {
        font-family: 'DIN Alternate';
        font-size: ${props => props.width}px;
        line-height: ${props => props.height}px;
        height: ${props => props.height}px;
      }
    }
  }

  .num-container {
    animation: ${props => (props.direction === 'bottom' ? easeSlideBottom : easeSlideTop)} 3s ease
      0.25s forwards;
  }
`

SlideNumber.defaultProps = {
  width: 48,
  height: 48,
  fontColor: '#000',
  numbers: [0, 1, 2, 3, 4],
  direction: 'top'
}
