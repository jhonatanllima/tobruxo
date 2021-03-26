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

  aside{
    min-height: 32rem;
    border-radius: 18px;

    grid-area: section;


    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */

    section{
      position: relative;

      width: 49%;
      height: 48%;
      padding: 0.8rem 1rem;
      border-radius: 18px;
      border-left: 6px solid var(--blue-dark);

      display: flex;
      align-items: center;
      
      transition: .2s;
      background: var(--background-card);

      :hover{
        cursor: pointer;
        transform: translateY(-0.35rem);
      }
      
      img{
        width: 35%;
        height: 100%;
        border-radius: 8px;

        object-fit: cover;
      }

      main{
        position: relative;

        width: 100%;
        height: 100%;
        padding-left: 1.8rem;

        h3{
          width: 10rem;
          height: 3rem;
          margin-top: 0.8rem;
          border-radius: 12px;
          padding: 0.6rem 1.6rem ;

          font-size: 1.3rem;
          background: var(--blue);
        }

        h2{
          margin-top: 1.3rem;

          font-size: 1.8rem;
        }

        footer{
          bottom: 0;
          position: absolute;

          display: flex;
          align-items: center;
          justify-content: center;

          span{
            margin-right: 1rem;
            font-weight: 400;
          }

          p{
            margin-top: 0.25rem;
            font-size: 1.2rem;
            font-weight: lighter;
          }
        }
      }


      :first-child{
        margin-right: 1.1%;
        margin-bottom: 1%
      }

      :nth-child(2){
        margin-left: 0.5%;
        margin-bottom: 1%
      }

      :nth-child(3){
        margin-right: 1.1%;
        margin-top: 1%
      }

      :nth-child(4){
        margin-left: 0.5%;
        margin-top: 1%
      }
    }
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
