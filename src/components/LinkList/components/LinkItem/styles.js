import styled from 'styled-components';

export const ItemBox = styled.a`
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 0px;
  margin: 10px;
  width: 100%;
  max-width: 300px;
  background-color: #cca697;
  text-decoration: none;

  @media (max-width: 300px) {
    flex-direction: column;
  }
`;

export const ItemLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const ItemLink = styled.span`
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
`;
