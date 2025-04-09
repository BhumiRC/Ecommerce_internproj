import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure content is spaced properly */
  height: 100%; /* Ensure all cards have the same height */

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  height: 2.5rem; /* Fixed height for titles */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Prevent text from wrapping */
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-weight: bold;
  color: #f0932b;
`;

const ProductCardStyles = {
    Card,
    Image,
    Title,
    Price,
};

export default ProductCardStyles;