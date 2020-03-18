import React from 'react'

import { withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import Window from './Window'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'
import Barcode from './Barcode'
import ProfileCard from '.'

const stories = storiesOf('Components|ProfileCard', module)
stories.addDecorator(story => <Provider story={story} />)

stories.addDecorator(withKnobs).add('BaseWindow', () => {
  const width = number('width', 902)
  const height = number('height', 519)

  return (
    <Container>
      <Window width={width} height={height} />
    </Container>
  )
})

stories.addDecorator(withKnobs).add('ProfileCard', () => {
  const width = number('width', 902)
  const height = number('height', 519)

  return (
    <Container style={{ width: 'auto' }}>
      <Window width={width} height={height}>
        <HeaderText>{'ID-CTRL 0457'}</HeaderText>
        <IdContainer>{'sskmy1024'}</IdContainer>
        <NameContainer>hogehoge</NameContainer>
        <DetailContainer>
          <span>2122年10月24日生</span>
          <span>20歳</span>
        </DetailContainer>
        <BarcodeWrapper>
          <Barcode />
        </BarcodeWrapper>
      </Window>
    </Container>
  )
})

stories.addDecorator(withKnobs).add('NoizeAnimWindow', () => {
  return (
    <Container style={{ width: 'auto' }}>
      <ProfileCard />
    </Container>
  )
})

const HeaderText = styled.div`
  position: absolute;
  left: 16%;
  top: 3%;
  font-size: 28px;
  line-height: 36px;
  color: ${Colors.brand};
`

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
  padding: 2px 16px;
`

const NameContainer = styled.div`
  position: absolute;
  left: 46%;
  top: 40%;
  color: ${Colors.white};
  font-size: 52px;
  line-height: 60px;
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

  > * + * {
    margin-left: 24px;
  }
`

const BarcodeWrapper = styled.div`
  position: absolute;
  top: 63%;
  left: 46%;
  width: 45%;
  overflow: hidden;
`
