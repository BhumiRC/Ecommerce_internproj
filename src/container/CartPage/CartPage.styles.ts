import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  min-height: calc(100vh - 160px);
  background: #f4f4f4;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

export const Price = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
`;

export const Subtotal = styled.p`
  font-weight: 500;
`;

export const Total = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
  margin-top: 2rem;
`;

export const RemoveButton = styled.button`
  padding: 0.4rem 0.8rem;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #e60023;
  }
`;
