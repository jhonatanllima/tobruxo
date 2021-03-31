import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  article{
    border-radius: 16px;
    padding: 1.6rem 2.4rem;
    border-left: 5px solid #37B6FE;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    transition: 0.2s;
    background: var(--background-card);

    + article{
      margin-top: 1.6rem;
    }

    :hover {
      cursor: pointer;
      transform: translateY(-0.35rem);
    }

    div{
      width: 100%;
      height: auto;
      margin-top: 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
