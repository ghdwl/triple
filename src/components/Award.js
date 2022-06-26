import styled from 'styled-components'

import theme, { NormalText } from '../styles/theme'

export default function Award({ item }) {
  return (
    <Wrap>
      <Img src={item.img} alt={item.name} />
      <NormalText>
        {item.upper}
        <br />
        {item.lower}
      </NormalText>
    </Wrap>
  )
}

const Wrap = styled.div`
  ${theme.flexCustom('center', 'center', 'center')}
  margin-top: 30px;
  margin-right: 39px;
  ${theme.fadeInUp('1.5s')}
`

const Img = styled.img`
  margin-right: 10px;
  width: 54px;
  object-fit: contain;
`
