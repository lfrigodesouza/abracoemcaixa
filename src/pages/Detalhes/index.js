import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Cuidados from './components/Cuidados';
import { BoxName, SubTitle, Title } from './styles';

export default function Detalhes() {
  const { box } = useParams();
  const [boxName, setBoxName] = useState(undefined);
  const [boxDetails, setBoxDetails] = useState();
  function setBox(text, details) {
    setBoxName(text);
    setBoxDetails(details);
  }

  useEffect(() => {
    switch (box) {
      case 'cuidados':
        setBox('Abraço de Cuidados', Cuidados);
        break;
      default:
        setBoxName(null);
        break;
    }
  }, []);

  if (boxName !== null) {
    return (
      <PageDefault>
        <header>
          <Title>
            {'Você recebeu um '}
            <BoxName>{boxName}</BoxName>
            !
          </Title>
          <SubTitle>Dicas de como aproveitar o seu presente</SubTitle>
          <Divider variant="middle" />
        </header>
        {boxDetails}
      </PageDefault>
    );
  }
  return <Redirect to="/" />;
}
