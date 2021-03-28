import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 36rem;
  margin: 10rem 0;
  border-radius: 18px;

  display: flex;
  align-items: center;
  flex-direction: column;


  background: var(--background-card);

  h1{
    margin: 5rem 0 3rem 0;
  }

  p{
    margin-bottom: 3rem;

    text-align: center;
    color: var(--title);
    font-size: 1.8rem;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    input{
      width: 28rem;
      height: 4.2rem;
      border: none;
      outline: none;
      border-radius: 4px;
      padding-left: 1rem;
      margin-bottom: 2.5rem;

      color: #fff;
      background: var(--title);

      ::placeholder{
        color: #fff;
      }
    }

    button{
      width: 15rem;
      border: none;
      outline: none;
      height: 4.5rem;
      border-radius: 3rem;

      color: #fff;
      transition: .2s;
      background: var(--blue);

      :hover{
        background: var(--blue-dark);
      }
    }
  }

  aside{
    top: -4.8rem;
    left: 8.5rem;
    position: absolute;

    display: flex;
    flex-direction:column;

    .Plane{
      width: 15rem;
      height: auto;

      color: var(--text-highlight);
    }

    .Wind{
      width: 11rem;
      height: auto;
      margin-top: 1rem;
      margin-left: -4.5rem;

      color: var(--title);
      transform: rotate(119deg);
    }
  }
`;
