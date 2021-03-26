
import { 
  Header,
  Branding,
  CardTopics,
  SectionTitle
} from '../components/';

import * as S from '../styles/pages/index';

export default function Home() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <CardTopics />
        <Branding />
        <SectionTitle />
      </S.Content>

      <footer></footer>
    </S.Container>
  )
}
