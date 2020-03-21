import React from 'react'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'

import Window from './Window'
import Detail from './Detail'
import Noise, { DivSize } from './Noise'
import { fadeIn } from 'libs/keyframe'
import Social from './Social'

interface Props {
  delay?: number
}

export default function ProfileCard({ delay = 0 }: Props) {
  return (
    <Window>
      <HeaderText>{'ID-CTRL 0457'}</HeaderText>
      <ImageContainer>
        <Noise delay={delay + 1} size={DivSize.Cover} infinite={9}>
          <ProfileImage imgSrc={'https://github.com/sskmy1024y.png'} />
        </Noise>
      </ImageContainer>
      <Detail delay={delay} name={'sho yamashita'} />
      <Social />
    </Window>
  )
}

const HeaderText = styled.div`
  position: absolute;
  left: 16%;
  top: 3%;
  font-size: 28px;
  line-height: 36px;
  color: ${Colors.brand};
`

const ImageContainer = styled.div`
  position: absolute;
  width: 36%;
  height: 78%;
  top: 16%;
  left: 6.4%;

  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out 0.7s forwards;
`

const ProfileImage = styled.div<{ imgSrc: string }>`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`
