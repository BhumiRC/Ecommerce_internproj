
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductCard = styled.div`
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
`;

export const ProductDescription = styled.p`
  margin-top: 1rem;
  color: #555;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #f0932b;
`;
