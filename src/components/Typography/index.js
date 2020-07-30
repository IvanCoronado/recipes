import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 60px;
  font-weight: ${({ theme }) => theme.weights.bold};
  line-height: 73px;
`
export const H2 = styled.h2`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.weights.bold};
  line-height: 44px;
`
export const H3 = styled.h3`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.weights.medium};
  line-height: 34px;
`
export const H4 = styled.h4`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.weights.bold};
  line-height: 22px;
`
export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 24px;
`
export const Body = styled.p`
  font-size: 16px;
  line-height: 22px;
`

export const BodyMedium = styled(Body)`
  font-weight: ${({ theme }) => theme.weights.medium};
`
export const PBig = styled(Subtitle)``

export const PBigBold = styled(PBig)`
  font-weight: ${({ theme }) => theme.weights.bold};
`

export const P = styled.p`
  font-size: 16px;
  line-height: 19px;
`

export const PBold = styled(P)`
  font-weight: ${({ theme }) => theme.weights.bold};
`

export const Small = styled.span`
  font-size: 14px;
  line-height: 20px;
`

export const SmallBold = styled(Small)`
  font-weight: ${({ theme }) => theme.weights.semiBold};
`

export const Caption = styled.span`
  font-size: 12px;
  line-height: 15px;
`

export const CaptionBold = styled(Caption)`
  font-weight: ${({ theme }) => theme.weights.bold};
`

export const Overline = styled(Caption)`
  text-transform: uppercase;
  letter-spacing: 1.6px;
`

export const OverlineBold = styled(Overline)`
  font-weight: ${({ theme }) => theme.weights.medium};
`
