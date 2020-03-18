import { keyframes } from 'styled-components'

export const noise1 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(-30px); }
`

export const noise2 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(58px); }
`

export const noise3 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(-58px); }
`

export const noise4 = keyframes`
  from, to { transform: translateX(0); }
  50% { transform: translateX(30px); }
`

export const bound = keyframes`
  from { transform: scaleY(3); }
  to { transform: scaleY(1); }
`
