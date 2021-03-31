import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: auto;
  margin: 6.4rem 0 3.2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    span{
      left: 0;
      position: absolute;

      width: 5.5px;
      height: 100%;
      /* border-radius: 4px; */

      background: var(--border-grey);
    }

    h2{
      margin-left: 3.5rem;
    }
  }

    a{
      width: 9rem;
      height: 3rem;
      border: none;
      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;

      outline: none;
      transition: .2s;
      font-size: 1.6rem;
      color: rgba(55, 182, 254, 0.75);

      :hover{
        font-weight: 500;
        text-decoration: underline;
      }
    }
`;
