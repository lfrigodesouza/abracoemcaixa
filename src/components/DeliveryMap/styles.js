import styled from 'styled-components';

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  margin: 10px 0px 0px 0px;
  padding: 10px;
  font-family: 'Courier Prime', monospace;

  @media (max-width: 375px) {
    font-size: 150%;
  }
`;

export const ColorBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &::before {
    margin: 5px;
    display: inline-block;
    content: '';
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
  }
`;

export const MapFrame = styled.iframe`
  margin: 10px;
  width: 320px;
  height: 400px;
  @media (min-width: 425px) {
    width: 425px;
  }
  @media (min-width: 600px) {
    width: 600px;
  }
`;
