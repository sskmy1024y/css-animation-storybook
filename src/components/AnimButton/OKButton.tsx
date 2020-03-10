import React from 'react'

import BaseButton, { ButtonBaseProps } from '../BaseButton'
import styled, { css } from 'styled-components'
import { slideRight, slideTop } from 'libs/keyframe'

const LINE_WIDTH = 4

interface Props extends ButtonBaseProps {
  color: string
}

const OkButtonContainer = styled(BaseButton)<Props>`
  background-color: ${props => props.color};
  .line-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 42%;
    height: 42%;
    transform: translate(-50%, -75%) rotate(45deg);
    .line {
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: ${LINE_WIDTH / 2}px;
      &:first-child {
        width: 80%;
        height: ${LINE_WIDTH}px;
        &::before,
        &::after {
          transform: translateX(101%);
        }
      }
      &:last-child {
        width: ${LINE_WIDTH}px;
        height: 100%;
        &::before,
        &::after {
          transform: translateY(-101%);
        }
      }
    }
  }
  /* hover */
  ${props =>
    !props.sp
      ? css`
          &:hover .line:first-child::after {
            /*  */
            animation: ${slideRight} 0.15s ease 0s forwards;
          }
          &:hover .line:last-child::after {
            animation: ${slideTop} 0.15s ease 0.15s forwards;
          }
        `
      : ``}
  /* animation */
  .line:first-child::before {
    animation: ${slideRight} 0.2s ease 0.4s forwards;
  }
  .line:last-child::before {
    animation: ${slideTop} 0.2s ease 0.5s forwards;
  }
`

export default function OkButton(props: Props) {
  return (
    <OkButtonContainer {...props}>
      <div className='line-box'>
        <div className='line' />
        <div className='line' />
      </div>
    </OkButtonContainer>
  )
}

OkButton.defaultProps = {
  sp: false,
  size: 50,
  color: '#90bdbd',
  subColor: '#ffffff',
  fontColor: '#5d3523'
}
