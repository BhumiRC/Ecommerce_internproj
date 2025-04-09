//import styled from 'styled-components';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import ProductCardStyles from './ProductCard.styles';
const { Card, Image, Title, Price } = ProductCardStyles;

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
