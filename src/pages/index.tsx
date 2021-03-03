
import { 
  Header,
  CardTopics 
} from '../components/';

import {
  Content, 
  Container 
} from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <CardTopics />
      </Content>

      <footer></footer>
    </Container>
  )
}
