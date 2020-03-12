import React from 'react'
import styled, { keyframes } from 'styled-components'

const FONT_SIZE = 24
const BOX_WIDTH = 200

function SlideLetter() {
  const letter = 'INITIALIZING'

  return (
    <FontContainer>
      {letter.split('').map((char, index) => (
        <Char index={index + 1} key={index}>
          {char}
        </Char>
      ))}
      {'//'.split('').map((char, index) => (
        <Indicate
          index={index + 1}
          key={index}
          charCount={letter.length}
          delay={0.75 * (index + 1)}
        >
          {char}
        </Indicate>
      ))}
    </FontContainer>
  )
}

const FontFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const FontContainer = styled.div`
  display: flex;
  position: relative;
  color: white;
  font-family: 'DIN Alternate';
  font-size: ${FONT_SIZE}px;
  line-height: ${FONT_SIZE}px;
  overflow: hidden;
  > * {
    opacity: 0;
  }
`

const Char = styled.div<{ index: number }>`
  /* Animation */
  animation: ${FontFadeIn} 0.05s ease ${props => `${0.5 + props.index * 0.02}s`} forwards;
`

const Indicate = styled.div<{ index: number; charCount: number; delay: number }>`
  /* Animation */
  animation: ${FontFadeIn} 0.05s ease ${props => `${0.5 + props.charCount * 0.02 + props.delay}s`}
    forwards;
`

export default SlideLetter
