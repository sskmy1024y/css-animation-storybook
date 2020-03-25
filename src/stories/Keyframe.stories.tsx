import React from 'react'

import { number, withKnobs, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Container } from 'stories'
import styled, { Keyframes } from 'styled-components'
import { slideTop, slideLeft, slideRight, slideBottom } from 'libs/keyframe'
import { useState } from 'hooks'
import { useCallback } from '@storybook/addons'
import CatIcon from 'components/icons/Cat'
import { zoomInToAnyScale } from 'libs/keyframe/zoom'

const animateTiming = {
  linear: 'linear',
  'ease-in-out': 'ease-in-out'
}

const storiesAll = storiesOf('Foundation|Keyframes', module)
storiesAll.addDecorator(withKnobs)

storiesAll.add('slide', () => {
  const key = select(
    'keyframe',
    {
      slideTop: 'top',
      slideLeft: 'left',
      slideRight: 'right',
      slideBottom: 'bottom'
    },
    'top'
  )

  const duration = number('duration', 2.5)
  const timing = select('timing', animateTiming, animateTiming.linear)
  const delay = number('delay', 0)

  const [isPlay, setIsPlay] = useState(true)
  const handleButton = useCallback(() => {
    setIsPlay(!isPlay)
  }, [setIsPlay, isPlay])

  const keyframe =
    key === 'left'
      ? slideLeft
      : key === 'right'
      ? slideRight
      : key === 'bottom'
      ? slideBottom
      : slideTop

  return (
    <Container>
      <SlideDiv
        keyframe={keyframe}
        duration={duration}
        timing={timing}
        delay={delay}
        play={isPlay ? 'running' : 'pause'}
        style={{ transform: 'translateY(50%)' }}
      />
      <button onClick={handleButton}>{isPlay ? 'pause' : 'play'}</button>
    </Container>
  )
})

storiesAll.add('zoomIn', () => {
  const magnification = number('magnification', 2)
  const duration = number('duration', 2.5)
  const timing = select('timing', animateTiming, animateTiming.linear)
  const delay = number('delay', 0)

  return (
    <Container>
      <TargetDiv
        keyframe={zoomInToAnyScale(magnification)}
        duration={duration}
        timing={timing}
        delay={delay}
        play={'running'}
        style={{ transform: 'translateY(50%)' }}
      >
        <CatIcon />
      </TargetDiv>
    </Container>
  )
})

interface AnimateProps {
  keyframe: Keyframes
  duration: number
  timing: string
  delay: number
  play: 'running' | 'pause'
}

const TargetDiv = styled.div<AnimateProps>`
  width: 100px;
  height: 100px;
  margin: 0 auto;

  /* animation proparty
   1. animation-name      ... アニメーションの名前  
   2. animation-duration  ... アニメーションが始まって終わるまでの時間 (0s)
   3. animation-timing-function ... アニメーションの進行の度合い (ease)
   4. animation-delay     ... アニメーションが始まる時間を指定 (0s)
   5. animation-iteration-count ... アニメーションの繰り返し回数を指定 (1)
   6. animation-direction ... アニメーションの再生方向を指定 (normal)
   7. animation-fill-mode ... アニメーションの開始前、終了後のスタイルを指定 
   8. animation-play-state  ... アニメーションの再生・停止を指定 (runnning)
  */
  animation: ${props => props.keyframe} ${props => `${props.duration}s`} ${props => props.timing}
    ${props => `${props.delay}s`} forwards infinite ${props => props.play};
`

const SlideDiv = styled(TargetDiv)`
  background-color: green;
`
