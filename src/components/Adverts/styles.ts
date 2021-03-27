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
    min-height: 61rem;
    padding-bottom: 1.6rem;

    display: flex;

    article{
      width: 32.5%;
      padding: 0.8rem;
      min-height: 100%;
      border-radius: 18px;
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;

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

      img{
        width: 100%;
        height: 23rem;
        border-radius: 8px;

        object-fit: cover;
      }

      main {
        padding: 2rem;

        h3{
          width: 10rem;
          height: 3rem;
          margin: 0 0 1.3rem 0;
          border-radius: 12px;
          padding: 0.6rem 1.6rem ;

          font-size: 1.3rem;
          background: var(--blue);
        }

        h2{
          font-size: 2.2rem;
          line-height: 1.2;
        }

        p{
          margin-top: 1.8rem;
          padding-right: 4rem;

          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: 300;
          

          overflow: hidden; 
          display: -webkit-box;
          -webkit-line-clamp: 4; 
          text-overflow: ellipsis; 
          -webkit-box-orient: vertical; 
        }   
      }

      aside{
        margin: 1.5rem 1.8rem;

        display: flex;
        align-items: flex-start;
        
        img{
          width: 5.5rem;
          height: 5.5rem;
          border-radius: 50%;
          margin-left: 0.6rem;

          background: var(--border-grey);
        }

        div{
          margin-left: 2rem;

          span{
            font-weight: 500;
          }

          p{
            margin-top: 0.6rem;

            font-weight: lighter;
          }
        }
      }
    }
  }

  footer{
    width: 100%;
    min-height: 15rem;

    display: flex;

    
    section{
      width: 33%;
      min-height: 100%;
      padding: 1.5rem 2rem;
      border-radius: 18px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

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

      h3{
          width: 10rem;
          height: 3rem;
          border-radius: 12px;
          padding: 0.6rem 1.6rem ;

          font-size: 1.3rem;
          background: var(--blue);
        }

      h2{
          margin-top: 0.5rem;
          line-height: 1.2;
          font-size: 1.8rem;
      }

      div{
        width: 88%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-weight: 500;
        }

        p {
          font-weight: lighter;
        }
      }
    }
  }

`;
