
import { 
  Header,
  Branding,
  CardTopics 
} from '../components/';

import * as S from '../styles/pages/index';

export default function Home() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <CardTopics />
        <Branding />
      </S.Content>

      <footer></footer>
    </S.Container>
  )
}
