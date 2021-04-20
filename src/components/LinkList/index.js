import React from 'react';
import LinkItem from './components/LinkItem';
import WhatsappLogo from '../../assets/img/whatsapp.svg';
import Instagram from '../../assets/img/instagram.svg';
import Catalogue from '../../assets/img/catalogue.svg';
import LinksList from './styles';

function LinkList() {
  return (
    <LinksList>
      <LinkItem
        itemLogo={WhatsappLogo}
        itemText="(11) 94155-5624"
        itemLink="https://api.whatsapp.com/send?phone=5511941555624"
      />
      <LinkItem
        itemLogo={Catalogue}
        itemText="Catálogo de Abraços"
        itemLink="https://firebasestorage.googleapis.com/v0/b/abracoemcaixa.appspot.com/o/AbracoEmCaixa-Catalogo.pdf?alt=media"
      />
      <LinkItem
        itemLogo={Instagram}
        itemText="@abracoemcaixa"
        itemLink="https://www.instagram.com/abracoemcaixa/"
      />
    </LinksList>
  );
}

export default LinkList;
