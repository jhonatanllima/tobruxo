
import {
  SEO,
  Header,
  Adverts,
  Branding,
  Newsletter,
  CardTopics,
  CaseStudies,
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
        <CardTopics />
        <Branding />
        <SectionTitle titleDescription="Advertising"/>
        <Adverts />
        <SectionTitle titleDescription="Case Studies"/>
        <CaseStudies />
        <SectionTitle titleDescription="Innovation"/>
        <Adverts />
        <SectionTitle titleDescription="Management"/>
        <CaseStudies />
        <Newsletter />
        
      </S.Content>

      <footer></footer>
    </S.Container>
  )
}
