import React, { Children } from 'react'
import styled from 'styled-components'
import CatOutline from 'components/icons/Cat/Outline'

import CatMask from './CatMask.png'

interface Props {
  children?: React.ReactElement
}

export default function CatIndicator({ children }: Props) {
  return (
    <LineWrapper>
      <CatOutline />
      <Mask>{children}</Mask>
    </LineWrapper>
  )
}

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 254, 0.64);
`

const LineWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 43px;
  overflow: hidden;
  > svg {
    opacity: 0.65;
  }
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 35px;
  margin: auto;
  mask-image: url(${CatMask}), none;
  mask-size: cover;
`

CatIndicator.defaultProps = {
  children: <InnerBox />
}
