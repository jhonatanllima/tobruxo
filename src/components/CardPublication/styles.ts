import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 33.3rem;
  padding: 0 1rem;

  gap: 2.4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

    div{
      position: relative;

      width: 100%;
      height: 33.3rem;

      display: flex;
      align-items: center; 
      flex-direction: column;
      justify-content: center;
      
      transition: 0.2s;

      img { 
        width: 100%;
        height: 85%;
        border-radius: 16px;

        object-fit: cover;
      }

      p{
        margin: 0.2rem 0.5rem;

        transition: 0.1s;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-family: 'Poppins' sans-serif;
      }

      span{
        top: -1px;
        position: absolute;

        width: 100%;
        height: 85%;
        border-radius: 16px;
      }

      :hover {
        cursor: pointer;

        p{
          color: #37B6FE;
        }

        span {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(55, 182, 254, 0.6) 100%);
        }
      }
    }
`;
