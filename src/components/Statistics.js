import styled from 'styled-components'

import theme, { Heading } from '../styles/theme'

export default function Statistics({ item }) {
  return (
    <Wrap>
      <Heading>
        <Bold>
          <span className="num" data-val={item.num}>
            {item.num}
          </span>
          {item.unit}
        </Bold>
        {item.text}
      </Heading>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-bottom: 20px;
  ${theme.fadeInUp('1s')}
`

const Bold = styled.span`
  font-weight: 700;
`
