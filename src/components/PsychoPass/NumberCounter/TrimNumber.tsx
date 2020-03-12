import React, { useMemo } from 'react'
import styled from 'styled-components'
import SlideNumber from './SlideNumber'

interface Props {
  size: number
  fontColor: string
  bgColor: string
  num: number
}

function TrimNumberContainer(props: Props) {
  // numを二桁にする
  const digit1 = Math.round((props.num / 10) % 10 ^ (String(props.num).length - 1))
  const digit2 = props.num % 10 ^ (String(props.num).length - 1)

  const slot1 = useMemo(() => [1, 2, 3, 4, 5].map(index => Math.abs(digit1 + 5 - index)), [digit1])
  const slot2 = useMemo(() => [1, 2, 3, 4, 5].map(index => Math.abs(digit2 + 5 - index)), [digit2])

  return (
    <TriangleTrim {...props}>
      <div className='trim_1'>
        <SlideNumber numbers={slot1} direction={'top'} width={props.size} height={props.size} />
      </div>
      <div className='trim_2'>
        <SlideNumber numbers={slot2} direction={'bottom'} width={props.size} height={props.size} />
      </div>
    </TriangleTrim>
  )
}

const TriangleTrim = styled.div<Props>`
  display: flex;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  color: ${props => props.fontColor};
  background-color: ${props => props.bgColor};

  .trim_1,
  .trim_2 {
    position: absolute;
    width: ${props => props.size * Math.sqrt(2)}px;
    height: ${props => props.size * Math.sqrt(2)}px;
    transform: rotate(45deg);
    transform-origin: 0% 0%;
    overflow: hidden;

    > div {
      position: absolute;
      transform: rotate(-45deg);
      width: ${props => props.size}px;
    }
  }

  .trim_1 {
    top: ${props => props.size * -1}px;
    > div {
      right: 0;
      transform-origin: 100% 0%;
    }
  }

  .trim_2 {
    left: ${props => props.size}px;
    > div {
      bottom: 0;
      transform-origin: 0% 100%;
      .num-container {
        right: 0;
        left: unset;
      }
    }
  }
`

TrimNumberContainer.defaultProps = {
  size: 48,
  fontColor: '#fff',
  bgColor: '#000'
}

export default TrimNumberContainer
