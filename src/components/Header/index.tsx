import { BiSearch } from 'react-icons/bi';

import * as S from './styles'

export function Header() {
  return (
    <S.Container className="animate__animated animate__fadeIn ">
      <S.Wrapper>
        <div>
          <img src="images/tb.svg" alt="To bruxo logo cabeçalho"/>
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Nosso Time</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Anuncie</a></li>
          </ul>
        </nav>

        <form >
          <BiSearch size={25} color={'#5D5D5C'}/>
          <input type="text" placeholder="Pesquisar..." />
        </form>
      </S.Wrapper>
    </S.Container>
  )
}