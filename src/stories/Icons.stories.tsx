import React from 'react'

import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
// import Provider from 'stories/Provider'

import { Container } from 'stories'
import ReactIcon from 'components/icons/ReactIcon'
import styled from 'styled-components'
import CatOutline from 'components/icons/Cat/Outline'
import CatIcon from 'components/icons/Cat'
import TwitterIcon from 'components/icons/Twitter'
import GitHubIcon from 'components/icons/GitHub'

const storiesAll = storiesOf('Foundation|Icon', module)
// storiesAll.addDecorator(story => <Provider story={story} />)
storiesAll.addDecorator(withKnobs)
storiesAll.add('Icons', () => {
  const size = number('size', 50)

  const Icons = [ReactIcon, CatIcon, CatOutline, TwitterIcon, GitHubIcon]
  return (
    <IconContainer>
      {Icons.map((Component, key) => (
        <Container key={key} width={size + 30} height={80}>
          <Component />
        </Container>
      ))}
    </IconContainer>
  )
})

const solo = storiesOf('Foundation|Icon', module).addDecorator(withKnobs)

solo.add('ReactIcon', () => {
  return <ReactIcon />
})

solo.add('CatOutline', () => {
  return (
    <Container black>
      <CatOutline />
    </Container>
  )
})

solo.add('CatIcon', () => {
  return (
    <Container black>
      <CatIcon />
    </Container>
  )
})

solo.add('Twitter', () => {
  const size = number('size', 50)
  return (
    <Container>
      <TwitterIcon size={size} />
    </Container>
  )
})

solo.add('GitHub', () => {
  const size = number('size', 50)
  return (
    <Container>
      <GitHubIcon size={size} />
    </Container>
  )
})

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`
