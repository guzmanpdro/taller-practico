import {Container, LinkPrimaryButton, LinkSecondaryButton} from '../../styles'
import photo from '../../assets/pedro-guzman.jpg'
import {
  AppHeader,
  H1Title,
  Span,
  Row,
  FlexContainer,
  CircleImage
} from './styles'

function Header() {
  return (
    <AppHeader>
      <Container>
        <FlexContainer>
          <div>
            <H1Title>
              Hola, mi nombre es
              <Span> Pedro Guzmán </Span>
              y soy desarrollador web
            </H1Title>
            <Row>  
              <LinkPrimaryButton href='#'>Mis proyectos</LinkPrimaryButton>
              <LinkPrimaryButton href='#'>Descargar mi CV</LinkPrimaryButton>
            </Row>
            <LinkSecondaryButton href='#'>Lee mis artículos</LinkSecondaryButton>
          </div>
          <CircleImage src={photo} alt="Pedro Guzmán" />
        </FlexContainer>
      </Container>
    </AppHeader>
  )
}

export default Header