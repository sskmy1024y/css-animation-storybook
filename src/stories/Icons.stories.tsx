import React from 'react'

import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
// import Provider from 'stories/Provider'

import { Container } from 'stories'
import ReactIcon from 'components/icons/ReactIcon'
import styled from 'styled-components'

const storiesAll = storiesOf('Foundation|Icon', module)
storiesAll.addDecorator(withKnobs)
// storiesAll.addDecorator(story => <Provider story={story} />)
storiesAll.add('Icons', () => {
  const size = number('size', 50)

  const Icons = [ReactIcon]
  return (
    <IconContainer>
      {Icons.map((Component, key) => (
        <Container key={key} width={size + 30}>
          <Component />
        </Container>
      ))}
    </IconContainer>
  )
})

storiesOf('Foundation|Icon', module)
  .addDecorator(withKnobs)
  .add('ReactIcon', () => {
    return <ReactIcon />
  })

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`
