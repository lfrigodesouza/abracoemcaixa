import styled from 'styled-components';
import Leaves from '../../../../assets/img/leaves.svg';

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

export const PageWrapper = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 95%, rgba(255, 208, 189, 1) 100%);
  padding-bottom: 50px;
  font-family: 'Abhaya Libre', serif;
`;
