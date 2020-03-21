import React from 'react'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'

import Window from 'components/PsychoPass/ProfileCard/Window'
import Noise from 'components/PsychoPass/ProfileCard/Noise'

import { fadeIn } from 'libs/keyframe'
import { media } from 'libs/Media'
import Initializing from '../Initializing'

interface Props {
  delay?: number
}

export default function InitialCard({ delay = 0 }: Props) {
  return (
    <Window white>
      <HeaderText>{'INITIALIZING'}</HeaderText>
      <Contain>
        <Initializing text={'INITIALIZING'} cat delay={delay} />
      </Contain>
    </Window>
  )
}

const HeaderText = styled.div`
  position: absolute;
  left: 16%;
  top: 3%;
  font-size: 28px;
  line-height: 36px;
  color: ${Colors.white};

  ${media.smallDown} {
    font-size: 14px;
    line-height: 1.4em;
  }
`

const Contain = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  transform: scale(1.5);
`
