import styled from 'styled-components'

const theme = {
  flexCustom: (alignItems, justifyContent, flexDirection) => `
  display: flex;
  flex-direction: ${flexDirection || 'initial'};
  align-items: ${alignItems || 'center'};
  justify-content: ${justifyContent || 'center'};
`,

  fadeInUp: (delay) => `
  animation: fadeInUp 0.7s;

  @keyframes fadeInUp {
      from {
          opacity: 0;
          transform: translateY(10px);
      }
      to {
          opacity: 1;
          transform: none;
      }
  }

  animation-delay: ${delay};
  `,
}

export default theme

export const Heading = styled.h3`
  color: #3a3a3a;
  font-size: 36px;
  letter-spacing: -1px;
`

export const NormalText = styled.p`
  color: #3a3a3acc;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`
