import styled from 'styled-components'

export const StyledArticle = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: .5em;
  padding: .5em;
  border-radius: 5px;

  &:hover {
    background-color: #e3e3e3;
  }

  &:hover img {
    transform: scale(1.10)
  }

  &:hover h3 {
    color: royalblue;
  }
`

export const ImgArticle = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 1.5em;
  object-fit: contain;
  transition: transform .3s ease;
`

export const TitleArticle = styled.h3`
  margin-bottom: .5rem;
  font-size: 18px;
  color: #444;
`

export const MetaArticle = styled.div`
  font-size: 12px;
  color: #222;
`