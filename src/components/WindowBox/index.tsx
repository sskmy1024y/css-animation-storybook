import React from 'react'
import styled from 'styled-components'
import AnimContainer from 'components/Base/AnimContainer'
import {
  flashSlideLeft,
  flashSlideBottom,
  flashSlideTop,
  flashSlideRight,
  innterWallpaperZoom
} from './keyframe'

const LINE_HEIGHT = 4
const BOX_WIDTH = 200
const BOX_HEIGHT = 200

const WindowBoxContainer = styled(AnimContainer)`
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .line {
      position: absolute;
      border-radius: 20px;

      &::before,
      &::after {
        background-color: #1cc6b8;
      }

      &.top {
        top: 0;
        left: 0;
        width: ${BOX_WIDTH}px;
        height: ${LINE_HEIGHT}px;
        &::before,
        &::after {
          transform: translateX(101%);
        }
      }
      &.left {
        top: 0;
        left: 0;
        width: ${LINE_HEIGHT}px;
        height: ${BOX_HEIGHT}px;
        &::before,
        &::after {
          transform: translateY(-101%);
        }
      }
      &.right {
        bottom: 0;
        right: 0;
        width: ${LINE_HEIGHT}px;
        height: ${BOX_HEIGHT}px;
        &::before,
        &::after {
          transform: translateY(101%);
        }
      }
      &.bottom {
        bottom: 0;
        right: 0;
        width: ${BOX_WIDTH}px;
        height: ${LINE_HEIGHT}px;
        &::before,
        &::after {
          transform: translateX(-101%);
        }
      }
    }

    .wallpaper {
      width: 100%;
      height: 100%;
      background-color: #1cc6b8;
      transform: scale(0);
    }
  }

  .line {
    &.top::before {
      animation: ${flashSlideLeft} 1s ease 0.4s forwards;
    }
    &.left::before {
      animation: ${flashSlideTop} 1s ease 0.4s forwards;
    }
    &.right::before {
      animation: ${flashSlideBottom} 1s ease 0.4s forwards;
    }
    &.bottom::before {
      animation: ${flashSlideRight} 1s ease 0.4s forwards;
    }
  }
  .wallpaper {
    animation: ${innterWallpaperZoom} 0.5s ease 1.5s forwards;
  }
`

function WindowBox() {
  return (
    <WindowBoxContainer width={200} height={200}>
      <div className='canvas'>
        <div className='line top'></div>
        <div className='line left'></div>
        <div className='line right'></div>
        <div className='line bottom'></div>
        <div className='wallpaper'></div>
      </div>
    </WindowBoxContainer>
  )
}

export default WindowBox
