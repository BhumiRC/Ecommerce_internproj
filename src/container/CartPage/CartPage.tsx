import {
  Container,
  CartItem,
  ProductImage,
  Info,
  Title,
  Price,
  Subtotal,
  Total,
  RemoveButton,
} from './CartPage.styles.ts';
import { useCart } from './CartContext.tsx';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ProductImage src={item.image} />
              <Info>
                <Title>{item.title}</Title>
                <Price>${item.price} × {item.quantity}</Price>
                <Subtotal>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Subtotal>
              </Info>
              <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
          <Total>Total: ${calculateTotal()}</Total>
        </>
      )}
    </Container>
  );
};

export default CartPage;
