import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  & > button {
    margin: 5px 0px;
    width: 150px;
  }
  & > div {
    margin: 5px 0px;
  }
`;

export const ErrorLabel = styled.div`
  color: #e51400;
  font-style: italic;
`;

export const SuccessLabel = styled.div`
  color: #638e36;
  font-style: italic;
`;
