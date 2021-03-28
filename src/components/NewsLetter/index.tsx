import { FaWind } from 'react-icons/fa';
import { FaRegPaperPlane } from 'react-icons/fa';

import * as S from './styles';

export function Newsletter(){
  return(
    <S.Container>
      <h1>Subscribe to our newsletter!</h1>
      <p>We'll send you the best of our blog just once a month. We <br /> promise.</p>

      <form >
        <input type="email" required placeholder="Email Address"/>
        <button type="button"> Subscribe </button>
      </form>

      <aside>
        <FaRegPaperPlane className="Plane"/>
        <FaWind className="Wind"/>
      </aside>  

    </S.Container>
  )
}