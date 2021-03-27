import { BsListCheck } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { RiAdvertisementFill } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5'

import { SEO } from '../index'

import * as S from './styles'

export function CardTopics() {
  return(
    <S.Container>
      <SEO title="TO BRUXO" description="Esse é site do tobruxo"/>

      <S.Card className="animate__animated animate__bounceIn animate__delay-1s" >
        <RiAdvertisementFill className="icon"/>
        <span>Advertising</span>
      </S.Card>

      <S.Card className="animate__animated animate__bounceIn animate__delay-2s">
        <IoDocumentTextOutline  className="icon"/>
        <span>Case Studies</span>
      </S.Card>

      <S.Card className="animate__animated animate__bounceIn animate__delay-3s">
        <FaRegLightbulb  className="icon"/>
        <span>Innovation</span>
      </S.Card>

      <S.Card className="animate__animated animate__bounceIn animate__delay-4s">
        <BsListCheck  className="icon"/>
        <span>Management</span>
      </S.Card>
    </S.Container>
  )  
}