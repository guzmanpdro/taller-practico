import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: min(1100px, 95%);
  margin: 0 auto;
`

export const FlexContainer = styled(Container)`
  display: flex;
  gap: ${props => props.gap || ".8rem"}
`

export const PrimaryButtonStyle = css`
  padding: 0.7em 1em;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  color: #FFF;
  background: royalblue;
`

export const SecondaryButtonStyle = css`
  color: royalblue;
`

export const LinkPrimaryButton = styled.a`
  ${PrimaryButtonStyle}
`

export const LinkSecondaryButton = styled.a`
  ${SecondaryButtonStyle}
`

export const PrimaryButton = styled.button`
  ${PrimaryButtonStyle}
`

export const SecondaryButton = styled.button`
  ${SecondaryButtonStyle}
`