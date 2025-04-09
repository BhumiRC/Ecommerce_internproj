// src/components/Footer.tsx
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #222;    // Dark, but not black
  color: #eee;               // Light but readable
  padding: 1rem 0;
  text-align: center;
  position: relative;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
