import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 23rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 26rem;
  margin: 0.8rem;
  height: 10rem;
  padding: 1.5rem;
  border-radius: 18px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.2s;
  background: var(--background-card);

  .icon{
    width: 4rem;
    height: 4rem;

    color: var(--blue);
  }

  span{
    font-weight: bold;
    color: var(--text);
  }

  :first-child{
    margin-left: 0;
  }

  :last-child{
    margin-right: 0;
  }

  :hover{
    cursor: pointer;
    transform: translateY(-0.25rem);
    box-shadow: rgba(255, 255, 255, 0.08) 1px 1px 5px 0px;

    .icon{
      color: var(--white);
    }
  }
`;
