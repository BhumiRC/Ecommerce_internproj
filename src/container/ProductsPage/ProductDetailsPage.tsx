import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { useCart } from '../CartPage/CartContext';
import {
  Container,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from './ProductsDetailsPage.styles';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>(); // Add type for useParams
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Correctly destructure useCart

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Container>Loading...</Container>;
  if (!product) return <Container>Product not found</Container>;

  return (
    <Container>
      <ProductCard>
        <ProductImage src={product.image} alt={product.title} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Properly place the button */}
      </ProductCard>
    </Container>
  );
};

export default ProductDetailsPage;
