
import {
  SEO,
  Header,
  Adverts,
  Branding,
  CardTopics,
  SectionTitle
} from '../components/';

import * as S from '../styles/pages/index';

export default function Home() {
  return (
    <S.Container>
      <SEO title="TO BRUXO" description="Esse é site do tobruxo"/>
      <Header />

      <S.Content  
        className="
          animate__animated 
          animate__fadeInUp
          "
      >
        <CardTopics />
        <Branding />
        <SectionTitle />
        <Adverts />
        <SectionTitle />
        <Adverts />
      </S.Content>

      <footer></footer>
    </S.Container>
  )
}
