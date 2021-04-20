import styled from 'styled-components';

const LogoWrapper = styled.img`
  width: 250px;

  @media (max-width: 300px) {
    width: 200px;
  }

  @media (max-width: 200px) {
    width: 100px;
  }
`;

export default LogoWrapper;
