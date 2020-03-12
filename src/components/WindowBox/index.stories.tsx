import React from 'react'

import { withKnobs, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import WindowBox from '.'

const stories = storiesOf('Components|AnimBox', module)
stories.addDecorator(story => <Provider story={story} />)

stories.addDecorator(withKnobs).add('WindowBox', () => {
  const size = number('size', 50)
  const color = text('color', '#90bdbd')

  return (
    <Container>
      <WindowBox />
    </Container>
  )
})
