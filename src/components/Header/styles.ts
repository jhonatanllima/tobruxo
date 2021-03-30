import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--background-card);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3rem;
  max-width: 1140px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    width: 7rem;
    height: auto;

    img{
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }

  nav{
    width: auto;
    height: auto;

    ul{
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      
       li{
         list-style: none;
       
         a{
           transition: .2s;
           font-size: 1.6rem;
           font-weight: bold;

           :hover{
             color: var(--blue);
           }
         }

         + li{
          padding-left: 2rem;
         }
       }
    }
  }

  form {
    width: 32.8rem;
    height: 5.1rem;
    padding: 0 3rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--background-input);


    input{
      height: 100%;
      border: none;
      padding-left: 2rem;
   

      flex: 1;

      outline: none;
      background: var(--background-input);
    }
  }
`;
