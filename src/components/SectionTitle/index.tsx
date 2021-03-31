import Link from 'next/link'

import * as S from './styles'

interface IsectionTitle {
  titleDescription: string;
  recentPosts?: string;
}

export function SectionTitle({titleDescription, recentPosts}: IsectionTitle) {
  return (
    <S.Container>
      <div>
        <span />
        <h2>{titleDescription}</h2>
      </div>

      <div>
        {recentPosts ? (
          <h2>{recentPosts}</h2>
        ) : (
          <Link href='/'>Ver todos</Link>
        )}
      </div>

      {/* {recentPosts ? (
       <div >
         <h2 style={{ marginRight: '6rem' }}>{recentPosts}</h2>
       </div> 
      ) : (
        <Link href='/'>Ver todos</Link>
      )} */}

    </S.Container>
  )
}