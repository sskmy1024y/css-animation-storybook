import React from 'react'

import { withKnobs, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import SlideLetter from './SlideLetter'
import styled from 'styled-components'
import Indicator from './Indicator'
import SlideIndicator from './SlideIndicator'

const stories = storiesOf('Components|AnimBox', module)
stories.addDecorator(story => <Provider story={story} />)

stories.addDecorator(withKnobs).add('SlideLetter', () => {
  const size = number('fontSize', 24)
  const letter = text('text', 'INITIALIZING')

  return (
    <BlackContainer>
      <SlideLetter text={letter} fontSize={size} />
    </BlackContainer>
  )
})

stories.addDecorator(withKnobs).add('Indicator', () => {
  return (
    <BlackContainer>
      <Indicator />
    </BlackContainer>
  )
})

stories.addDecorator(withKnobs).add('SlideIndicator', () => {
  return (
    <BlackContainer>
      <SlideIndicator />
    </BlackContainer>
  )
})

const BlackContainer = styled(Container)`
  background-color: #000;
`
