// src/App.styles.ts
import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

export const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Space for fixed navbar */
`;
