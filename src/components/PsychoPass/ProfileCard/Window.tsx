import React from 'react'
import BackgroundImg from './BaseComponent.png'
import styled from 'styled-components'

interface Props {
  width: number
  height: number
}

export default function Window({ width, height }: Props) {
  return <WindowComponent width={width} height={height} />
}

const WindowComponent = styled.div<Props>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${BackgroundImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
