import {
  StyledArticle,
  ImgArticle,
  TitleArticle,
  MetaArticle
} from './styles'

function Article({ propsArticle }) {
  return (
    <StyledArticle
      href={propsArticle.url}
      target="_blank"
    >
      <ImgArticle src={propsArticle.user.profile_image_90} alt={propsArticle.user.name} />
      <div>
        <TitleArticle>{propsArticle.title}</TitleArticle>
        <MetaArticle>
          <time datatime={propsArticle.published_at}>{propsArticle.readable_publish_date}</time>
        </MetaArticle>
      </div>
    </StyledArticle>
  )
}

export default Article