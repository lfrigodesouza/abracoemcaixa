import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 15%, rgba(255, 208, 189, 1) 100%);
  padding-bottom: 30px;
`;

export const Navigator = styled(Link)`
  padding: 5px 0px 0px 0px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000000;
  font-family: 'Courier Prime', monospace;

  @media (min-width: 400px) {
    height: 60px;
  }
  @media (min-width: 1024px) {
    font-size: 110%;
    height: 80px;
  }
`;
