import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ErrorLabel, SuccessLabel } from '../../components/AuthForm/styles';
import PageDefault from '../../components/PageDefault';
import { useAuth } from '../../contexts/AuthContext';
import UploadFile from '../../helpers/storage';
import { LogOutButton, PageTitle, UploadForm } from './styles';

function Admin() {
  const [file, setFile] = useState('');
  const [hasError, setHasError] = useState([false, '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { logout } = useAuth();
  const history = useHistory();

  function handleUpload(evt) {
    setHasError([false, '']);
    setIsSuccess(false);
    setIsLoading(false);
    evt.preventDefault();
    if (file === '') {
      setHasError([true, 'Selecione um arquivo']);
      return;
    }
    if (file.type !== 'application/pdf') {
      setHasError([true, 'Tipo de arquivo inválido']);
      return;
    }
    setIsLoading(true);
    UploadFile(file, 'AbracoEmCaixa-Catalogo.pdf')
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setHasError([true, `${error}`]);
      });
  }

  async function handleLogout(evt) {
    evt.preventDefault();
    await logout();
    history.push('/autenticacao');
  }

  return (
    <PageDefault>
      <PageTitle>Carregar catálogo</PageTitle>
      <UploadForm onSubmit={handleUpload}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <Button type="submit" variant="contained" disabled={isLoading}>
          Carregar
        </Button>
        {isLoading && 'Carregando...'}
        {hasError[0] && <ErrorLabel>{hasError[1]}</ErrorLabel>}
        {isSuccess && <SuccessLabel>Carregado com sucesso!</SuccessLabel>}
      </UploadForm>
      <LogOutButton onClick={handleLogout}>Sair</LogOutButton>
    </PageDefault>
  );
}

export default Admin;
