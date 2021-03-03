import { BsListCheck } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { RiAdvertisementFill } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5'

import { 
  Card,
  Container
} from '../styles/components/CardTopics';

export function CardTopics() {
  return(
    <Container>
      <Card>
        <RiAdvertisementFill className="icon"/>
        <span>Advertising</span>
      </Card>

      <Card>
        <IoDocumentTextOutline  className="icon"/>
        <span>Advertising</span>
      </Card>

      <Card>
        <FaRegLightbulb  className="icon"/>
        <span>Advertising</span>
      </Card>

      <Card>
        <BsListCheck  className="icon"/>
        <span>Advertising</span>
      </Card>
    </Container>
  )  
}