// HomePage.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 5rem 2rem 4rem;
  background-color: #1f1f1f;
  color: #fff;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #f0c040;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

export const ShopButton = styled(Link)`
  padding: 0.9rem 2.2rem;
  background-color: #f0c040;
  color: #1f1f1f;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6b800;
  }
`;

export const ToggleButton = styled.button`
  margin-top: 3rem;
  padding: 0.75rem 2rem;
  background: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #444;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 1.5rem 0 0.5rem;
  margin: 0 auto;
  max-width: 320px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CategoryItem = styled.li`
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  padding: 0.6rem;
  background-color: #2a2a2a;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3a3a3a;
  }
`;
