import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--background-card);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 0;

  max-width: 1100px;

  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  div{
    padding: 1rem;
    display: flex;
    flex-direction: column;

    Img{
      width: 15rem;
      height: auto;

      margin-bottom: 3rem;

      object-fit: cover;
    }

    span{
      margin-bottom: 3rem;

      font-size: 1.8rem;
      color: var(--title);
    }

    a{
      margin: 1rem 0 0.5rem 1rem;

      transition: .2s;
      font-size: 1.7rem;
      color: var(--title);

      :hover{
        color: var(--text-highlight)
      }
    }
  }
`;
