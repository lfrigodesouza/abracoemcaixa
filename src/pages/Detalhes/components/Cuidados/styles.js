import styled from 'styled-components';
import Leaves from '../../../../assets/img/leaves.svg';

const LeavesImage = styled.img`
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

export default LeavesImage;
