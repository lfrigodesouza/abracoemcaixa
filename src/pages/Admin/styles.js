import styled from 'styled-components';

import { Fab } from '@material-ui/core';

export const PageTitle = styled.h1`
  margin-top: 0px;
  text-align: center;
`;

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    width: 150px;
    margin: 10px 0px;
  }
`;

export const ErrorLabel = styled.div`
  color: #e51400;
  font-style: italic;
`;

export const LogOutButton = styled(Fab)`
  background-color: #c65d48 !important;
  position: fixed !important;
  bottom: 50px;
  right: 50px;
`;
