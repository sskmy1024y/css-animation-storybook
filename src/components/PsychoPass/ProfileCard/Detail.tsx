import React from 'react'
import styled from 'styled-components'
import Barcode from './Barcode'
import { Colors } from 'libs/Colors'
import Noise from './Noise'
import { fadeIn } from 'libs/keyframe'
import { media } from 'libs/Media'

interface Props {
  name: string
  delay?: number
}

export default function Detail({ name, delay = 0 }: Props) {
  return (
    <>
      <IdContainer>
        <Noise delay={delay + 0.65} infinite={7}>{`ID: sskmy1024`}</Noise>
      </IdContainer>
      <NameContainer>
        <Noise delay={delay + 1.3} infinite={4}>
          {name}
        </Noise>
      </NameContainer>
      <DetailContainer>
        <Noise delay={delay + 0.9} infinite={6}>
          <span>1997年10月24日生</span>
          <span>22歳</span>
        </Noise>
      </DetailContainer>
      <BarcodeWrapper>
        <Noise delay={delay + 1.1}>
          <Barcode />
        </Noise>
      </BarcodeWrapper>
    </>
  )
}

const IdContainer = styled.div`
  position: absolute;
  min-width: 45%;
  max-width: 50%;
  height: 11%;
  left: 46%;
  top: 22%;
  color: ${Colors.white};
  border: 2px solid ${Colors.white};
  border-radius: 2px;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-out 0.5s forwards;

  font-size: 32px;
  line-height: 52px;

  ${media.smallDown} {
    font-size: 18px;
    line-height: 1.8em;
  }

  > * {
    margin: 2px 16px;
  }
`

const NameContainer = styled.div`
  position: absolute;
  left: 46%;
  top: 40%;
  max-width: 40%;
  color: ${Colors.white};
  font-size: 52px;
  line-height: 60px;
  white-space: nowrap;
  opacity: 0;

  ${media.smallDown} {
    font-size: 24px;
    line-height: 1.8em;
    font-weight: bold;
  }

  animation: ${fadeIn} 0.2s ease-out 1.2s forwards;
`

const DetailContainer = styled.div`
  position: absolute;
  left: 46%;
  top: 55%;
  width: 46%;
  color: ${Colors.white};
  font-size: 32px;
  line-height: 36px;
  white-space: nowrap;
  opacity: 0;

  animation: ${fadeIn} 0.1s ease-out 0.85s forwards;
  span + span {
    margin-left: 24px;
  }

  ${media.smallDown} {
    font-size: 14px;
    line-height: 1.4em;
    span + span {
      margin-left: 6px;
    }
  }
`

const BarcodeWrapper = styled.div`
  position: absolute;
  top: 63%;
  left: 46%;
  width: 45%;
  height: 5%;
  overflow: hidden;

  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 0.9s forwards;
`
