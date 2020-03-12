import React from 'react'
import styled from 'styled-components'
import AnimContainer, { AnimContainerProps } from 'components/Base/AnimContainer'
import SlideNumber from './SlideNumber'

interface Props extends AnimContainerProps {
  fontColor: string
}

export default function NumberContainer(props: Props) {
  return (
    <CharContainer {...props}>
      <SlideNumber direction={'top'} />
      <SlideNumber direction={'bottom'} />
    </CharContainer>
  )
}

const CharContainer = styled(AnimContainer)<Props>`
  display: flex;
  color: ${props => props.fontColor};
`

NumberContainer.defaultProps = {
  width: 48,
  height: 50,
  fontColor: '#000'
}
