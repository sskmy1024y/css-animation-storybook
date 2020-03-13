import React from 'react'
import styled from 'styled-components'
import IndicatorBox from './IndicatorBox'

interface Props {
  children?: React.ReactElement
}

export default function Indicator({ children }: Props) {
  return (
    <IndicatorBox border style={{ opacity: 0.65 }}>
      <InnerLine>
        <IndicatorBox width={40} height={26} style={{ opacity: 0.8 }}>
          {children}
        </IndicatorBox>
      </InnerLine>
    </IndicatorBox>
  )
}

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 254, 0.64);
`

const InnerLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ffffff;
  box-sizing: border-box;
`

Indicator.defaultProps = {
  children: <InnerBox />
}
