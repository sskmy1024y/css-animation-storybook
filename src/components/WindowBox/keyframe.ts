import { keyframes } from 'styled-components'

export const flashSlideLeft = keyframes`
  0% { transform: translateX(100%); }
  40% { transform: translateX(0%); }
  60% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
`

export const flashSlideRight = keyframes`
  0% { transform: translateX(-100%); }
  40% { transform: translateX(0%); }
  60% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
`

export const flashSlideTop = keyframes`
  0% { transform: translateY(100%); }
  40% { transform: translateY(0%); }
  60% { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
`

export const flashSlideBottom = keyframes`
  0% { transform: translateY(-100%); }
  40% { transform: translateY(0%); }
  60% { transform: translateY(0%); }
  100% { transform: translateY(100%); }
`

export const innterWallpaperZoom = keyframes`
  0% {
    border-radius: 100%;
    transform: scale(0);
  }
  70% {
    border-radius: 0;
    transform: scale(1.1);
  }
  90% {
    transform: scale(1.05);
  }
  80%, 100% {
    transform: scale(1);
  }
`
