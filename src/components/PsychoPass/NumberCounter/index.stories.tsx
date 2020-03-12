import React from 'react'

import { withKnobs, number, text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import NumberContainer from '.'
import TrimNumberContainer from './TrimNumber'
import SlideNumber from './SlideNumber'

const stories = storiesOf('Components|AnimBox', module)
stories.addDecorator(story => <Provider story={story} />)

stories.addDecorator(withKnobs).add('SlideNumber', () => {
  const direction = select(
    'direction',
    {
      top: 'top',
      bottom: 'bottom'
    },
    'bottom'
  )

  return (
    <Container>
      <SlideNumber direction={direction} />
    </Container>
  )
})

stories.addDecorator(withKnobs).add('NumberContainer', () => {
  return (
    <Container>
      <NumberContainer />
    </Container>
  )
})

stories.addDecorator(withKnobs).add('TrimNumber', () => {
  return (
    <Container>
      <TrimNumberContainer size={48} />
    </Container>
  )
})
