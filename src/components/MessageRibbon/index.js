import React from 'react';
import Ribbon from './styles';

function MessageRibbon() {
  return (
    <Ribbon>
      Não realizaremos entregas entre os dias
      {' '}
      <strong>10/Maio</strong>
      {' '}
      e
      {' '}
      <strong>17/Maio </strong>
    </Ribbon>
  );
}

export default MessageRibbon;
