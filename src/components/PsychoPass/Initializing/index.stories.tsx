import React from 'react'

import { withKnobs, number, text, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import SlideLetter from './SlideLetter'
import styled from 'styled-components'
import Indicator from './Indicator'
import SlideIndicator from './SlideIndicator'
import Initializing from '.'
import CatIndicator from './CatIndicator'

const stories = storiesOf('Components|AnimBox', module)
stories.addDecorator(story => <Provider story={story} />)
stories.addDecorator(withKnobs)

stories.add('SlideLetter', () => {
  const size = number('fontSize', 24)
  const letter = text('text', 'INITIALIZING')

  return (
    <BlackContainer>
      <SlideLetter text={letter} fontSize={size} />
    </BlackContainer>
  )
})

stories.add('Indicator', () => {
  return (
    <BlackContainer>
      <Indicator />
    </BlackContainer>
  )
})

stories.add('CatIndicator', () => {
  return (
    <BlackContainer>
      <CatIndicator />
    </BlackContainer>
  )
})

stories.add('SlideIndicator', () => {
  const isCat = boolean('cat', false)

  return (
    <BlackContainer>
      <SlideIndicator cat={isCat} />
    </BlackContainer>
  )
})

stories.add('Initialize', () => {
  const label = text('text', 'INITIALIZING')
  const isCat = boolean('cat', false)

  return (
    <BlackContainer
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '380px' }}
    >
      <Initializing text={label} cat={isCat} />
    </BlackContainer>
  )
})

const BlackContainer = styled(Container)`
  background-color: #000;
`
