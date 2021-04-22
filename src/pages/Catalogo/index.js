import React from 'react';
import PageDefault from '../../components/PageDefault';

export default function Catalogo() {
  return (
    <PageDefault>
      <embed
        style={{ height: '80vh' }}
        src="https://firebasestorage.googleapis.com/v0/b/abracoemcaixa.appspot.com/o/AbracoEmCaixa-Catalogo.pdf?alt=media"
        type="application/pdf"
        width="100%"
      />
    </PageDefault>
  );
}
