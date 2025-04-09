// HomePage.tsx
import { useEffect, useState } from 'react';
import {
  Container,
  Title,
  Subtitle,
  ShopButton,
  ToggleButton,
  CategoryList,
  CategoryItem,
} from './HomePage.styles';

const HomePage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <Title>Welcome !</Title>
      <Subtitle>Your one-stop shop for all your daily needs</Subtitle>
      <ShopButton to="/products">Explore Products</ShopButton>

      <ToggleButton onClick={() => setShowCategories(!showCategories)}>
        {showCategories ? 'Hide Categories ▲' : 'Show Categories ▼'}
      </ToggleButton>

      {showCategories && (
        <CategoryList>
          {categories.map((cat) => (
            <CategoryItem key={cat}>{cat}</CategoryItem>
          ))}
        </CategoryList>
      )}
    </Container>
  );
};

export default HomePage;
