import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai'

import * as S from './styles'

export function Branding() {
  return (
    <S.Container>
      <header>
        <img src="images/mao.jpg" alt="maozinha"/>
      </header>

      <aside >
        <section>
          <img src="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/c4b86/image.webp" alt="teste"/>

          <main>
            <h3>Advertising</h3>

            <h2>Markdown Language Sample Blog</h2>

            <footer>
              <span>Jane Smith</span>
              <p>may 15, 2021  <AiOutlineClockCircle  style={{marginBottom: -2, color: '#4953b8'}}/> 2 min</p>
            </footer>
          </main>
        </section>

        <section>
          <img src="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/c4b86/image.webp" alt="teste"/>

          <main>
            <h3>Advertising</h3>

            <h2>Markdown Language Sample Blog</h2>

            <footer>
              <span>Jane Smith</span>
              <p>may 15, 2021  <AiOutlineClockCircle  style={{marginBottom: -2, color: '#718096'}}/> 2 min</p>
            </footer>
          </main>
        </section>

        <section>
          <img src="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/c4b86/image.webp" alt="teste"/>

          <main>
            <h3>Advertising</h3>

            <h2>Markdown Language Sample Blog</h2>

            <footer>
              <span>Jane Smith</span>
              <p>may 15, 2021  <AiOutlineClockCircle  style={{marginBottom: -2, color: '#718096'}}/> 2 min</p>
            </footer>
          </main>
        </section>

        <section>
          <img src="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/c4b86/image.webp" alt="teste"/>

          <main>
            <h3>Advertising</h3>

            <h2>Markdown Language Sample Blog</h2>

            <footer>
              <span>Jane Smith</span>
              <p>may 15, 2021  <AiOutlineClockCircle  style={{marginBottom: -2, color: '#718096'}}/> 2 min</p>
            </footer>
          </main>
        </section>
      </aside>


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