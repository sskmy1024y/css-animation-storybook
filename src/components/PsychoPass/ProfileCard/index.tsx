import React from 'react'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'

import Window from './Window'
import Detail from './Detail'
import Noise, { DivSize } from './Noise'
import { fadeIn } from 'libs/keyframe'
import CircleButton from 'components/AnimButton/CircleButton'

interface Props {
  delay?: number
}

export default function ProfileCard({ delay = 0 }: Props) {
  return (
    <Window>
      <HeaderText>{'ID-CTRL 0457'}</HeaderText>
      <ImageContainer>
        <Noise delay={delay + 1} size={DivSize.Cover}>
          <ProfileImage imgSrc={'https://github.com/sskmy1024y.png'} />
        </Noise>
      </ImageContainer>
      <Detail delay={delay} name={'sho yamashita'} />
      <SocialContainer>
        <CircleButton size={50} delay={1.5} />
        <CircleButton size={50} delay={2} />
      </SocialContainer>
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
  overflow: hidden;

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

const SocialContainer = styled.div`
  position: absolute;
  display: flex;
  top: 75%;
  left: 46%;

  > * {
    opacity: 0;

    &:nth-of-type(1) {
      animation: ${fadeIn} 1s ease-in 1s forwards;
    }
    &:nth-of-type(2) {
      animation: ${fadeIn} 1s ease-in 1.4s forwards;
    }
  }

  > * + * {
    margin-left: 32px;
  }
`
