import React from 'react'

import BaseButton, { ButtonBaseProps } from '../BaseButton'
import styled, { css } from 'styled-components'
import { slideTop, slideBottom } from 'libs/keyframe'

const LINE_WIDTH = 4

interface Props extends ButtonBaseProps {
  color: string
}

const PlayButtonContainer = styled(BaseButton)<Props>`
  background-color: ${props => props.color};
  .line-box {
    position: absolute;
    top: 50%;
    left: 53%;
    width: 42%;
    height: 42%;
    transform: translate(-50%, -50%);

    .line {
      position: absolute;
      border-radius: ${LINE_WIDTH / 2}px;
      &::before,
      &::after {
        transform: translateX(101%);
      }

      &.line1 {
        top: 2.5%;
        left: 0;
        width: ${LINE_WIDTH}px;
        height: 95%;
      }

      &.line2 {
        top: -4px;
        right: 9px;
        width: ${LINE_WIDTH}px;
        height: 100%;
        transform: rotate(-62deg);
      }

      &.line3 {
        top: 4px;
        right: 9px;
        width: ${LINE_WIDTH}px;
        height: 100%;
        transform: rotate(62deg);
      }
    }
  }
  /* hover */
  ${props =>
    !props.sp
      ? css`
          &:hover .line1::after {
            animation: ${slideTop} 0.15s ease 0.1s forwards;
          }
          &:hover .line2::after {
            animation: ${slideBottom} 0.15s ease 0.25s forwards;
          }
          &:hover .line3::after {
            animation: ${slideBottom} 0.15s ease 0.4s forwards;
          }
        `
      : ``}
  /* animation */
  .line1::before {
    animation: ${slideTop} 0.15s ease 0.4s forwards;
  }
  .line2::before {
    animation: ${slideBottom} 0.15s ease 0.55s forwards;
  }
  .line3::before {
    animation: ${slideBottom} 0.15s ease 0.7s forwards;
  }
`

export default function PlayButton(props: Props) {
  return (
    <PlayButtonContainer {...props}>
      <div className='line-box'>
        <div className='line line3' />
        <div className='line line2' />
        <div className='line line1' />
      </div>
    </PlayButtonContainer>
  )
}

PlayButton.defaultProps = {
  sp: false,
  size: 50,
  color: '#90bdbd',
  subColor: '#ffffff',
  fontColor: '#5d3523'
}
