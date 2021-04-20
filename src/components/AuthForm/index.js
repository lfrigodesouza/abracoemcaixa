import { TextField, Button } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ErrorLabel, Form } from './styles';
import { useAuth } from '../../contexts/AuthContext';

function AuthForm() {
  const [hasError, setHasError] = useState(false);
  const [logging, setLogging] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogin(evt) {
    evt.preventDefault();
    setLogging(true);
    setHasError(false);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      setLogging(false);
      history.push('/admin');
    } catch (error) {
      setLogging(false);
      setHasError(true);
    }
  }

  useEffect(() => {
    if (currentUser) {
      history.push('/admin');
    }
  }, []);

  return (
    <Form onSubmit={handleLogin}>
      <TextField variant="outlined" label="E-mail" size="small" inputRef={emailRef} required />
      <TextField
        variant="outlined"
        label="Senha"
        type="password"
        size="small"
        inputRef={passwordRef}
        required
      />
      <Button type="submit" variant="contained" disabled={logging}>
        Login
      </Button>
      {hasError && <ErrorLabel>Usuário ou senha inválido</ErrorLabel>}
    </Form>
  );
}

export default AuthForm;
