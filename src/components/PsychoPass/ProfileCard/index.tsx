import React from 'react'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'

import Window from './Window'
import Detail from './Detail'

export default function ProfileCard() {
  return (
    <Window>
      <HeaderText>{'ID-CTRL 0457'}</HeaderText>
      <Detail name={'sho yamashita'} />
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
