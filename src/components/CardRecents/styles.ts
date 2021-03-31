import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10.2rem;
  padding: 1.6rem;
  border-radius: 16px;

  border-left: 5px solid #37B6FE;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: var(--background-card);

  div{
    width: 100%;
    height: auto;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
