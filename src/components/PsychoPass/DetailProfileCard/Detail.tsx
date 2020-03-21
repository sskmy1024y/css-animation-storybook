import React from 'react'
import styled from 'styled-components'
import { Colors } from 'libs/Colors'

import ReactMarkdown from 'react-markdown/with-html'
import Markdown from './Profile.md'

export default function Detail() {
  return (
    <Container>
      <ReactMarkdown source={Markdown} escapeHtml={false} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${Colors.white};

  h1 {
    font-size: 16px;
    font-weight: bold;
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.brand};

    & + p {
      color: ${Colors.brand};
    }
  }

  table,
  th,
  td {
    border-collapse: collapse;
    border: 1px solid #ccc;
    padding: 2px 4px;
  }

  table {
    min-width: 32%;
  }

  ul {
    list-style: none;
  }
`
