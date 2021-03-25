import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 11.5vh;

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
    width: 15rem;
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
         padding-left: 2rem;

         a{
           font-size: 1.6rem;
           font-weight: bold;

           :hover{
             color: var(--blue);
           }
         }
       }
    }
  }
`;
