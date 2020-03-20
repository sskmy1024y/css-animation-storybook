import React from 'react'

import { withKnobs, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'

import OkButton from './OKButton'
import CancelButton from './CancelButton'
import PlayButton from './PlayButton'
import CircleButton from './CircleButton'

const stories = storiesOf('Components|AnimButton', module)
stories.addDecorator(story => <Provider story={story} />)
stories.addDecorator(withKnobs)

stories.add('OkButton', () => {
  const size = number('size', 50)
  const color = text('color', '#90bdbd')

  return (
    <Container>
      <OkButton size={size} color={color} />
    </Container>
  )
})

stories.add('CancelButton', () => {
  const size = number('size', 50)
  const color = text('color', '#ea8b98')

  return (
    <Container>
      <CancelButton size={size} color={color} />
    </Container>
  )
})

stories.add('PlayButton', () => {
  const size = number('size', 50)
  const color = text('color', '#ea8b98')

  return (
    <Container>
      <PlayButton size={size} color={color} />
    </Container>
  )
})

stories.add('CircleButton', () => {
  const size = number('size', 50)
  const color = text('color', '#ea8b98')

  return (
    <Container black>
      <CircleButton size={size} />
    </Container>
  )
})
