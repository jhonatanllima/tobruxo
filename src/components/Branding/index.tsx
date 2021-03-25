import { FaRegHandshake } from 'react-icons/fa';

import * as S from './styles'

export function Branding() {
  return (
    <S.Container>
      <header>
        <img src="images/mao.jpg" alt="maozinha"/>
      </header>

      <section />

      <div >
        <FaRegHandshake size={70} color={'#9F7AEA'} />
        <h1>Best Networking Workshops</h1> 
        <p>In this workshop, learn when and how to network with modern best practices.</p>
        <ul>
          <li>Explain the importance of networking for career-building</li>
          <li>Practice modern tips for effective networking</li>
          <li>Understand the steps towards building your own network</li>
        </ul>  

        <button>Learn More</button>
      </div>

    </S.Container>
  );
}