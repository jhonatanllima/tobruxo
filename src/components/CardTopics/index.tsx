import { BsListCheck } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { RiAdvertisementFill } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5'

import * as S from './styles'

export function CardTopics() {
  return(
    <S.Container>
      <S.Card>
        <RiAdvertisementFill className="icon"/>
        <span>Advertising</span>
      </S.Card>

      <S.Card>
        <IoDocumentTextOutline  className="icon"/>
        <span>Case Studies</span>
      </S.Card>

      <S.Card>
        <FaRegLightbulb  className="icon"/>
        <span>Innovation</span>
      </S.Card>

      <S.Card>
        <BsListCheck  className="icon"/>
        <span>Management</span>
      </S.Card>
    </S.Container>
  )  
}