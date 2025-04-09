import styled from 'styled-components';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  transition: 0.2s ease;
  text-align: center;

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
  height: 2.5rem;
  overflow: hidden;
`;

const Price = styled.p`
  font-weight: bold;
  color: #f0932b;
`;

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <Link to={`/products/${product.id}`}>View</Link>
    </Card>
  );
};

export default ProductCard;
