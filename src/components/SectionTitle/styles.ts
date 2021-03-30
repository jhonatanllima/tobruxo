import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: auto;
  margin: 7rem 0 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    span{
      left: 0;
      position: absolute;

      width: 4px;
      height: 100%;
      border-radius: 4px;

      background: var(--border-grey);
    }

    h2{
      margin-left: 3.5rem;
    }
  }

  button{
      width: 9rem;
      height: 3rem;
      border: none;
      border-radius: 12px;

      color: #fff;
      outline: none;
      transition: .2s;
      font-size: 1.2rem;
      background: var(--border-grey);

      :hover{
        font-weight: 500;
        background: var(--title);
      }
    }
`;
