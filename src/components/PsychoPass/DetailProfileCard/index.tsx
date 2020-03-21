import React from 'react'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'

import Window from 'components/PsychoPass/ProfileCard/Window'
import Noise from 'components/PsychoPass/ProfileCard/Noise'
import Detail from './Detail'

import { fadeIn } from 'libs/keyframe'
import { media } from 'libs/Media'

interface Props {
  delay?: number
}

export default function DetailProfileCard({ delay = 0 }: Props) {
  return (
    <Window white>
      <HeaderText>{'DETAIL-PROFILE'}</HeaderText>
      <TopLabel>
        <Noise infinite={7}>{'ALERT SETTING'}</Noise>
      </TopLabel>
      <Content>
        <Detail />
      </Content>
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

const TopLabel = styled.div`
  position: absolute;
  top: 14%;
  left: 8%;
  font-size: 36px;
  line-height: 42px;
  color: ${Colors.brand};
`

const Content = styled.div`
  position: absolute;
  width: 88%;
  height: 64%;
  top: 24%;
  left: 7%;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 16px;

  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
`
