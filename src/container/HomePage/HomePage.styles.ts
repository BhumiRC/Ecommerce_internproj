// HomePage.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #222;
  min-height: calc(100vh - 160px);
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #f0c040;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-top: 1rem;
`;

export const ShopButton = styled(Link)`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background-color: #f0c040;
  color: #222;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.2s ease;

  &:hover {
    background-color: #e6b800;
  }
`;

export const ToggleButton = styled.button`
  margin-top: 3rem;
  padding: 0.75rem 2rem;
  background: #444;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #555;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0 auto;
  max-width: 300px;
`;

export const CategoryItem = styled.li`
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;
