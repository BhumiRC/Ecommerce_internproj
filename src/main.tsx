import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//import { CartProvider } from './container/CartPage/CartContext';
import { CartProvider } from './container/CartPage/CartContext';
// Ensure the path to CartContext is correct
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <App />
  </CartProvider>
  </StrictMode>,
)

