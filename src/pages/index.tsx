
import {
  SEO,
  Footer,
  Header,
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
          animate__fadeInUp"
      >

        <SectionTitle titleDescription="Em destaque"/>
     
        <SectionTitle titleDescription="Animes"/>

        <SectionTitle titleDescription="Mangás"/>
        
      </S.Content>

      <Footer />
    </S.Container>
  )
}
