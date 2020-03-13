import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'

interface BoxProps {
  width: number
  height: number
  border?: boolean
  style?: CSSProperties
  children?: JSX.Element
}

export default function IndicatorBox({ width, height, style, children, border }: BoxProps) {
  return (
    <Container width={width} height={height} style={style}>
      <IndicatorMask width={width} border={border}>
        <IndicatorBoxBoy width={width} height={height}>
          {children}
        </IndicatorBoxBoy>
      </IndicatorMask>
    </Container>
  )
}

interface StyledProps {
  width: number
  height: number
}

const Container = styled.div<StyledProps>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
`

const IndicatorMask = styled.div<{ width: number; border?: boolean }>`
  position: absolute;
  bottom: 50%;
  right: -20%;
  width: ${props => props.width}px;
  height: ${props => props.width + 20}px;
  transform: rotate(-45deg);
  transform-origin: 100% 100%;
  overflow: hidden;

  ${props =>
    props.border &&
    css`
      outline: 1px solid #ffffff;
      outline-offset: -1px;
    `}
`

const IndicatorBoxBoy = styled.div<StyledProps>`
  position: absolute;
  bottom: 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  transform: rotate(45deg);
  transform-origin: 70% 39%;
`

IndicatorBox.defaultProps = {
  width: 48,
  height: 32
}
