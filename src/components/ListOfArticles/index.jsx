import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container } from '../../styles'
import Article from '../Article'
import { ArticlesSection, TitleSection } from './styles'

function ListOfArticles() {
  let [articles] = useContext(UserContext)
  return (
    <ArticlesSection>
      <Container>
        <TitleSection>Artículos más recientes de dev.to relacionados con {articles.tagDevTo}</TitleSection>
        {
          articles.articlesDevTo.map(article => {
            return (
              <Article key={article.id} propsArticle={article}></Article>
            )
          })
        }
      </Container>
    </ArticlesSection>
  )
}

export default ListOfArticles