import styled from 'styled-components'

export const AppHeader = styled.header`
  padding: 4em 0;
`

export const H1Title = styled.h1`
  font-size: min(4rem, 10vw);
  margin: 0;
`

export const Span = styled.span`
  font-weight: 700;
  color: royalblue;
`

export const Row = styled.div`
  display: flex;
  gap: .8rem;
  margin: 1.5rem 0;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const CircleImage = styled.img`
  width: calc(100vw - 1rem);
  border-radius: 50%;
`