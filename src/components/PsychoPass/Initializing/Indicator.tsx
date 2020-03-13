import React from 'react'
import styled from 'styled-components'
import IndicatorBox from './IndicatorBox'

interface Props {
  children?: React.ReactElement
}

export default function Indicator({ children }: Props) {
  return (
    <IndicatorBox border style={{ opacity: 0.65 }}>
      <InnterLineBox>
        <IndicatorBox width={40} height={26} style={{ opacity: 0.8 }}>
          {children}
        </IndicatorBox>
      </InnterLineBox>
    </IndicatorBox>
  )
}

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 254, 0.64);
`

Indicator.defaultProps = {
  children: <InnerBox />
}

const InnterLineBox = ({ children }: Props) => (
  <InnerLineWrapper>
    <InnerLineLeft />
    <InnerLineRight />
    {children}
  </InnerLineWrapper>
)

const InnerLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const InnerLine = styled.div`
  position: absolute;
  top: 0;
  width: 40%;
  height: 100%;
  border-top: solid;
  border-bottom: solid;
  box-sizing: border-box;
`

const InnerLineLeft = styled(InnerLine)`
  left: 0;
  border-left: solid;
  border-width: 1px;
  border-color: #ffffff;
`

const InnerLineRight = styled(InnerLine)`
  right: 0;
  border-right: solid;
  border-width: 1px;
  border-color: #ffffff;
`
