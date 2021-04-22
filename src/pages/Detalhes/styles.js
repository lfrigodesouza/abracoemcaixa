import styled from 'styled-components';
import Leaves from '../../assets/img/leaves.svg';

export const Text = styled.p`
  padding: 0px 20px;
  text-align: justify;
`;

export const H1 = styled(Text)`
  font-size: 140%;
  text-align: left;
  text-decoration: underline dashed;
`;

export const H2 = styled(Text)`
  font-size: 120%;
  text-align: left;
`;
export const H3 = styled(Text)`
  font-size: 110%;
  text-align: left;
`;

export const Title = styled.div`
  font-size: 170%;
  font-weight: 600;
  text-align: center;
  padding: 25px 10px 25px 10px;
  font-family: 'Courier Prime', monospace;

  @media (max-width: 400px) {
    font-size: 140%;
  }
`;

export const SubTitle = styled.div`
  text-align: center;
  font-size: 120%;
  padding: 20px 10px 5px 10px;
  font-family: 'Abhaya Libre', serif;
`;

export const BoxName = styled.span`
  background-color: #000000;
  color: #ffffff;
  display: inline-block;
`;

export const DetailWrapper = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 95%, rgba(255, 208, 189, 1) 100%);
  padding: 0 20px 50px 20px;
  font-family: 'Abhaya Libre', serif;
`;

export const LeavesImage = styled.img`
  transform: rotate(315deg);
  position: fixed;
  bottom: -20px;
  right: -50px;
  opacity: 0.2;
  max-width: 300px;
`;
LeavesImage.defaultProps = {
  src: Leaves,
  alt: 'Desenho de folhas',
};
