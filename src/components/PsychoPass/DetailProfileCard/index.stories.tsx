import React from 'react'

import { withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import DetailProfileCard from '.'

const stories = storiesOf('Components|ProfileCard', module)
stories.addDecorator(story => <Provider story={story} />)
stories.addDecorator(withKnobs)

stories.add('DetailCard', () => {
  return (
    <Container width={'auto'}>
      <DetailProfileCard />
    </Container>
  )
})
