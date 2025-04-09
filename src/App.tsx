// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

import HomePage from './container/HomePage/HomePage';
import ProductsPage from './container/ProductsPage';
import CartPage from './container/CartPage';

import { AppWrapper, MainContent } from './App.styles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
