import React from 'react'

import BaseButton, { ButtonBaseProps } from 'components/AnimButton/BaseButton'

import styled, { css } from 'styled-components'
import { slideRight } from 'libs/keyframe'

const LINE_WIDTH = 4

interface Props extends ButtonBaseProps {
  color: string
}

const CancelButtonContainer = styled(BaseButton)<ButtonBaseProps>`
  background-color: ${props => props.color};
  .line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: ${LINE_WIDTH}px;
    border-radius: ${LINE_WIDTH / 2}px;
    &::before,
    &::after {
      transform: translateX(-101%);
    }
    &:first-child {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:last-child {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  /* hover */
  ${props =>
    !props.sp
      ? css`
          &:hover .line:first-child::after {
            animation: ${slideRight} 0.15s ease 0s forwards;
          }
          &:hover .line:last-child::after {
            animation: ${slideRight} 0.15s ease 0.15s forwards;
          }
        `
      : ``}
  /* animation */
  .line:first-child::before {
    animation: ${slideRight} 0.2s ease 0.4s forwards;
  }
  .line:last-child::before {
    animation: ${slideRight} 0.2s ease 0.7s forwards;
  }
`

export default function CancelButton(props: Props) {
  return (
    <CancelButtonContainer {...props}>
      <div className='line-box'>
        <div className='line' />
        <div className='line' />
      </div>
    </CancelButtonContainer>
  )
}

CancelButton.defaultProps = {
  sp: false,
  size: 50,
  color: '#ea8b98',
  subColor: '#ffffff',
  fontColor: '#5d3523'
}
