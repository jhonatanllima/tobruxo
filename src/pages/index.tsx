
import {
  SEO,
  Footer,
  Header,
  SectionTitle,
  CardPublication
} from '../components/';

import * as S from '../styles/pages/index';

export default function Home() {
  return (
    <S.Container>
      <SEO title="TO BRUXO" description="Esse é site do tobruxo"/>
      <Header />

      <S.Content className="animate__animated animate__fadeInUp">
        <SectionTitle titleDescription="Em destaque"/>
        <CardPublication />
        <SectionTitle titleDescription="Animes"/>
        <CardPublication />
        <SectionTitle titleDescription="Mangás"/>
        <CardPublication />
      </S.Content>

      <Footer />
    </S.Container>
  )
}
