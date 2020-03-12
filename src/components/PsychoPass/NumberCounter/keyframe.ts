import { keyframes } from 'styled-components'

export const easeSlideTop = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
`

export const easeSlideBottom = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`
