import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 76rem;

  gap: 1.5rem;
  display: grid;
  grid-template-areas: "head    right"
                       "section right";

  grid-template-rows: 2fr;
  grid-template-columns:  1fr 0.31fr;

  header{
    grid-area: head;

    img{
      width: 100%;
      height: 100%;
      border-radius: 18px;

      object-fit: cover;

      filter: brightness(0.7);
    }
  }

  section{
    min-height: 32rem;
    border-radius: 18px;

    grid-area: section;
    background: var(--background-card);
  }

  div{
    position: relative;

    padding: 3rem;
    border-radius: 18px;

    display: flex;
    flex-direction: column;

    grid-area: right;
    background: var(--background-card);

    h1{
      font-size: 2.8rem;

      margin: 1rem 0;
      line-height: 1.2;
    }

    p{
      margin: 2rem 0;
    }

    ul{
      margin-left: 2rem;

      li{
        margin: 1rem 0;
        line-height: 1.6;
      }
    }

    button{
      left: 4rem;
      bottom: 3rem;
      position: absolute;

      width: 18rem;
      height: 5rem;
      border: none;
      border-radius: 25px;

      color: #fff;
      transition: .2s;
      background: var(--blue);

      :hover{
        background: var(--border-box);
      }
    }
  }

`;
