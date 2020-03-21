import React from 'react'
import CircleButton from 'components/AnimButton/CircleButton'
import styled from 'styled-components'
import GitHubIcon from 'components/icons/GitHub'
import { fadeIn } from 'libs/keyframe'
import TwitterIcon from 'components/icons/Twitter'
import { media } from 'libs/Media'

interface Props {
  delay?: number
}

export default function Social({ delay = 0 }: Props) {
  return (
    <SocialContainer delay={delay}>
      <CircleButton size={50} delay={1.5} href={'https://github.com/sskmy1024y'}>
        <GitHubIcon size={32} />
      </CircleButton>
      <CircleButton size={50} delay={1.8} href={'https://twitter.com/sskmy1024r'}>
        <TwitterIcon size={32} />
      </CircleButton>
    </SocialContainer>
  )
}

const SocialContainer = styled.div<{ delay: number }>`
  position: absolute;
  display: flex;
  top: 75%;
  left: 46%;
  margin-left: 8px;

  > * {
    opacity: 0;

    &:nth-of-type(1) {
      animation: ${fadeIn} 1s ease-in ${({ delay }) => `${delay + 1.5}s`} forwards;
    }
    &:nth-of-type(2) {
      animation: ${fadeIn} 1s ease-in ${({ delay }) => `${delay + 2}s`} forwards;
    }
  }

  > * + * {
    margin-left: 24px;
  }

  ${media.smallDown} {
    transform: scale(0.6);
    transform-origin: top left;
  }
`
