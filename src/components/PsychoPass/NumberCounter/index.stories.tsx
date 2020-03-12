import React from 'react'

import { withKnobs, number, text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Provider from 'stories/Provider'
import { Container } from 'stories'
import NumberContainer from '.'
import TrimNumberContainer from './TrimNumber'
import SlideNumber from './SlideNumber'
import styled from 'styled-components'

const stories = storiesOf('Components|AnimBox', module)
stories.addDecorator(story => <Provider story={story} />)

stories.addDecorator(withKnobs).add('SlideNumber', () => {
  const direction = select(
    'direction',
    {
      top: 'top',
      bottom: 'bottom'
    },
    'top'
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
    <Wrapper>
      <TrimNumberContainer size={48} num={1} />
      <TrimNumberContainer size={48} num={2} />
      <TrimNumberContainer size={48} num={3} />
    </Wrapper>
  )
})

const Wrapper = styled(Container)`
  > * + * {
    margin-left: 20px;
  }
`
