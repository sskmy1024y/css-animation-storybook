import React from 'react'
import styled from 'styled-components'
import Barcode from './Barcode'
import { Colors } from 'libs/Colors'
import Noise from './Noise'
import { fadeIn } from 'libs/keyframe'

interface Props {
  name: string
  delay?: number
}

export default function Detail({ name, delay = 0 }: Props) {
  return (
    <>
      <IdContainer>
        <Noise delay={delay + 0.65}>sskmy1024</Noise>
      </IdContainer>
      <NameContainer>
        <Noise delay={delay + 1.3}>{name}</Noise>
      </NameContainer>
      <DetailContainer>
        <Noise delay={delay + 0.9}>
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
  height: 60px;
  left: 46%;
  top: 22%;

  font-size: 32px;
  line-height: 52px;
  color: ${Colors.white};

  border: 2px solid ${Colors.white};
  border-radius: 2px;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-out 0.5s forwards;

  > * {
    margin: 2px 16px;
  }
`

const NameContainer = styled.div`
  position: absolute;
  left: 46%;
  top: 40%;
  color: ${Colors.white};
  font-size: 52px;
  line-height: 60px;
  opacity: 0;

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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 0;

  animation: ${fadeIn} 0.1s ease-out 0.85s forwards;

  span + span {
    margin-left: 24px;
  }
`

const BarcodeWrapper = styled.div`
  position: absolute;
  top: 63%;
  left: 46%;
  width: 45%;
  overflow: hidden;

  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 0.9s forwards;
`
