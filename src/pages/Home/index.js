import React from 'react';
import DeliveryMap from '../../components/DeliveryMap';
import Header from '../../components/Header';
import LinkList from '../../components/LinkList';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <PageDefault hideNavbar>
      <Header />
      <LinkList />
      <DeliveryMap />
    </PageDefault>
  );
}

export default Home;
