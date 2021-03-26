import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 68rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  header{
    width: 100%;
    min-height: 62rem;
    padding-bottom: 1.6rem;

    display: flex;

    article{
      width: 33%;
      min-height: 100%;
      border-radius: 18px;

      transition: .2s;
      background: var(--background-card);

      :hover{
        cursor: pointer;
        transform: translateY(-0.35rem);
      }

      :first-child{
        margin-right: 0.8rem;
      }

      :nth-child(2){
        margin-left: 0.8rem;
        margin-right: 0.8rem;
      }

      :nth-child(3){
        margin-left: 0.8rem;
      }
    }
  }

  footer{
    width: 100%;
    min-height: 16rem;

    display: flex;
    section{
      width: 33%;
      min-height: 100%;
      border-radius: 18px;

      transition: .2s;
      background: var(--background-card);

      :hover{
        cursor: pointer;
        transform: translateY(-0.35rem);
      }

      :first-child{
        margin-right: 0.8rem;
      }

      :nth-child(2){
        margin-left: 0.8rem;
        margin-right: 0.8rem;
      }

      :nth-child(3){
        margin-left: 0.8rem;
      }
    }
  }

`;
