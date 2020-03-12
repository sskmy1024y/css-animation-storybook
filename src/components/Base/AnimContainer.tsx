import React from 'react'
import styled from 'styled-components'

export interface AnimContainerProps {
  width: number
  height: number
}

const AnimContainer = styled.div<AnimContainerProps>`
  position: relative;
  display: block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 0;
  margin: 0;

  .line {
    overflow: hidden;
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default AnimContainer
