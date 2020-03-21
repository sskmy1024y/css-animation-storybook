import { keyframes } from 'styled-components'

export const zoomOut = keyframes`
  from { transform: scale(1) }
  to { transform: scale(2) }
`

export const zoomIn = keyframes`
  from { transform: scale(0) }
  to { transform: scale(1) }
`

export const zoomAndFadeIn = keyframes`
  from { 
    transform: scale(0);
    opacity: 0;
  }
  to { 
    transform: scale(1);
    opacity: 1;
  }
`

export const zoomAndFadeOut = keyframes`
  from { 
    transform: scale(1);
    opacity: 1;
  }
  to { 
    transform: scale(0);
    opacity: 0;
  }
`
