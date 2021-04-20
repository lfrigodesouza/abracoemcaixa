import React from 'react';
import Header from '../../components/Header';
import LinkList from '../../components/LinkList';
import MessageRibbon from '../../components/MessageRibbon';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <PageDefault hideNavbar>
      <MessageRibbon />
      <Header />
      <LinkList />
    </PageDefault>
  );
}

export default Home;
