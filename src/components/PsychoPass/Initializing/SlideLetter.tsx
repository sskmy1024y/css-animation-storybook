import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadein, fadeout } from 'libs/keyframe'

interface Props {
  text: string
  fontSize?: number
}

function SlideLetter({ text, fontSize = 24 }: Props) {
  return (
    <FontContainer fontSize={fontSize}>
      {text.split('').map((char, index) => (
        <Char index={index + 1} key={index}>
          {char}
        </Char>
      ))}
      {'//'.split('').map((char, index) => (
        <Indicate index={index + 1} key={index} charCount={text.length} delay={0.75 * (index + 1)}>
          {char}
        </Indicate>
      ))}
      <RealText>{`${text}//`}</RealText>
    </FontContainer>
  )
}

const FontSlideOut = keyframes`
  0% { letter-spacing: 0; opacity: 1; }
  75% { opacity: 0; }
  100% { letter-spacing: -30px; }
`

const FontContainer = styled.div<{ fontSize: number }>`
  display: flex;
  position: relative;
  color: white;
  font-family: 'DIN Alternate';
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.fontSize}px;
  overflow: hidden;
  > * {
    opacity: 0;
  }
`

const Char = styled.div<{ index: number }>`
  /* Animation */
  animation: ${fadein} 0.05s ease ${props => `${0.5 + props.index * 0.025}s`} forwards,
    ${fadeout} 0.01s ease 2.5s forwards;
`

const Indicate = styled.div<{ index: number; charCount: number; delay: number }>`
  /* Animation */
  animation: ${fadein} 0.05s ease ${props => `${0.5 + props.charCount * 0.025 + props.delay}s`}
      forwards,
    ${fadeout} 0.01s ease 2.6s forwards;
`

const RealText = styled.div`
  position: absolute;
  opacity: 0;
  letter-spacing: 0;
  animation: ${fadein} 0.01s ease 2.5s forwards, ${FontSlideOut} 1s ease 3.75s forwards;
`

export default SlideLetter
