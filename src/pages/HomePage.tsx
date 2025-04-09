import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #222;
  min-height: calc(100vh - 160px);
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f0c040;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-top: 1rem;
`;

const ShopButton = styled(Link)`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background-color: #f0c040;
  color: #222;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.2s ease;

  &:hover {
    background-color: #e6b800;
  }
`;

const ToggleButton = styled.button`
  margin-top: 3rem;
  padding: 0.75rem 2rem;
  background: #444;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #555;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0 auto;
  max-width: 300px;
`;

const CategoryItem = styled.li`
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

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
