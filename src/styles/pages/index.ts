import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  `;

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 0 3rem;
  min-height: 54vh;
  max-width: 1100px;


  display: flex;
  align-items: center;
  flex-direction: column;


  @media (max-width: 1024px){
    padding: 0 1rem;
  }
`;
