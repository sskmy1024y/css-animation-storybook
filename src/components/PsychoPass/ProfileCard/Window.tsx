import React from 'react'
import BackgroundImg from './BaseComponent.png'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'

import Detail from './Detail'

interface Props {
  width?: number
  height?: number
  children?: React.ReactNode
}

export default function Window({ width = 902, height = 519, children }: Props) {
  return (
    <WindowComponent width={width} height={height}>
      {children}
    </WindowComponent>
  )
}

const WindowComponent = styled.div<Props>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${BackgroundImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
