import Link from 'next/link';

import * as S from './styles'

export function Footer() {
  return (
    <S.Container className="animate__animated animate__fadeIn animate__delay-4s">
      <S.Wrapper>
        <div>
          <img src="images/tobruxo.png" alt="TO BRUXO"/>
          <span>© 2021, Todos os <br /> Direitos Reservados.</span>
          {/* <strong>Powered By</strong> */}
        </div>
        <div>
          <strong>Links Rápidos</strong>
          <Link href="#">Mangás</Link>
          <Link href="#">Animes</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contato</Link>
        </div>
        <div>
          <strong>Termos</strong>
          <Link href="#">Termos de uso</Link>
          <Link href="#">Cookies</Link>
        </div>
        <div>
          <strong>Comunidade</strong>
          <Link href="#">Discord</Link>
        </div>
        <div>
          <strong>Redes sociais</strong>
          <Link href="#">Instagram</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Youtube</Link>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}