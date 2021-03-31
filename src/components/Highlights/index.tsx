import * as S from './styles'

import { CardRecents } from '../'

export function Highlights() {
  return (
    <S.Container>
      <S.Carousel />

      <S.RecentPosts>
        <CardRecents />
      </S.RecentPosts>
    </S.Container>
  )
}