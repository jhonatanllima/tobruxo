import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <img src="images/tobruxo.png" alt="To bruxo"/>
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Nosso Time</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Anuncie</a></li>
          </ul>
        </nav>
      </S.Wrapper>
    </S.Container>
  )
}