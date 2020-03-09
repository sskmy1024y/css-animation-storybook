import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonBaseProps {
  size: number
  subColor?: string
  fontColor?: string
  sp?: boolean
  children?: React.ReactNode
}

const BaseButton = styled.button<ButtonBaseProps>`
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  position: relative;
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
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
    &::before {
      background-color: ${props => props.subColor};
    }
    &::after {
      background-color: ${props => props.fontColor};
    }
  }
  /* focus */
  &:focus {
    outline: none;
  }
  /* hover */
  ${props =>
    !props.sp
      ? css`
          &:hover {
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
          }
        `
      : ``}
`

export default BaseButton
