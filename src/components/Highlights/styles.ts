import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 45.8rem;

  gap: 5.3rem;
  display: grid;
  grid-template-columns: 5fr 2fr;
`;

export const Carousel = styled.div`
  width: 100%;
  min-height: 45.8rem;

  background: var(--background-card);
`;

export const RecentPosts = styled.div`
  width: 100%;
  min-height: 45.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`;