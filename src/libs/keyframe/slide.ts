import { keyframes } from 'styled-components'

/**
 * スライド関係のアニメーション
 */

export const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0%); }
`

export const slideLeft = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0%); }
`

export const slideTop = keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0%); }
`

export const slideBottom = keyframes`
  from { transform: translateY(-100%); }
  to   { transform: translateY(0%); }
`
