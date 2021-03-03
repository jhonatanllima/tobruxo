import {
  Wrapper,
  Container,
} from '../styles/components/Header'

export function Header() {
  return (
    <Container>
      <Wrapper>
        <div>
          <img src="images/tobruxo.png" alt="To bruxo"/>
        </div>

        <nav>
          <ul>
            <li><a href="#">Casa</a></li>
            <li><a href="#">Nosso Time</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Anuncie</a></li>
          </ul>
        </nav>
      </Wrapper>
    </Container>
  )
}