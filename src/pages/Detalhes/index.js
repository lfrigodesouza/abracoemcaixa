import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Cuidados from './components/Cuidados';
import Festa from './components/Festa';
import { BoxName, DetailWrapper, Title } from './styles';

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
      case 'festa':
        setBox('Abraço de Festa', Festa);
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
          <Divider variant="middle" />
        </header>
        <DetailWrapper>{boxDetails}</DetailWrapper>
      </PageDefault>
    );
  }
  return <Redirect to="/" />;
}
