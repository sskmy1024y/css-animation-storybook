import React from 'react'
import BackgroundImg from './BaseComponent.png'
import BackgroundImgWhite from './BaseComponentWhite.png'
import styled from 'styled-components'
import { media } from 'libs/Media'

interface Props {
  width?: number
  height?: number
  white?: boolean
  children?: React.ReactNode
}

export default function Window({ width = 902, height = 519, white = false, children }: Props) {
  return (
    <WindowComponent white={white} width={width} height={height}>
      {children}
    </WindowComponent>
  )
}

const WindowComponent = styled.div<Props>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${({ white }) => (white ? BackgroundImgWhite : BackgroundImg)});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  ${media.smallDown} {
    width: 100%;
    height: 40%;
  }
`
