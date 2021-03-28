import Link from 'next/link';

import * as S from './styles'

export function Footer() {
  return (
    <S.Container >
      <S.Wrapper>
        <div>
          <img src="images/tobruxo.png" alt="TO BRUXO"/>
          <span>© 2021, All Rights Reserved.</span>
          <strong>Powered By</strong>
        </div>
        <div>
          <strong>Quick Links</strong>
          <Link href="#">Advertise with us</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact US</Link>
        </div>
        <div>
          <strong>Legal Stuff</strong>
          <Link href="#">Advertise with us</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact US</Link>
        </div>
        <div>
          <strong>Social Media</strong>
          <Link href="#">Advertise with us</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact US</Link>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}