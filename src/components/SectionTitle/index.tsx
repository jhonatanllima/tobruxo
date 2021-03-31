import Link from 'next/link'

import * as S from './styles'

interface IsectionTitle {
  titleDescription: string;
}

export function SectionTitle({titleDescription}: IsectionTitle) {
  return (
    <S.Container>
      <div>
        <span />
        <h2>{titleDescription}</h2>
      </div>
      <Link href='/'>Ver todos</Link>
    </S.Container>
  )
}