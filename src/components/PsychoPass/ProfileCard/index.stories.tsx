import React from 'react'

import { withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import Window from './Window'

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

stories.addDecorator(withKnobs).add('NoizeAnimWindow', () => {
  const width = number('width', 902)
  const height = number('height', 519)

  return (
    <Container style={{ width: 'auto' }}>
      <Window width={width} height={height} />
    </Container>
  )
})
