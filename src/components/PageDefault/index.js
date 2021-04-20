import React from 'react';
import { node, bool } from 'prop-types';
import { PageWrapper, Navigator } from './styles';
import Footer from '../Footer';
import Logo from '../../assets/img/logo.png';

function PageDefault({ children, hideNavbar }) {
  return (
    <PageWrapper>
      {!hideNavbar && (
        <Navigator to="/">
          <img src={Logo} alt="Logo" height="100%" />
          Abraço em Caixa
        </Navigator>
      )}
      {children}
      <Footer />
    </PageWrapper>
  );
}

PageDefault.defaultProps = {
  hideNavbar: false,
};

PageDefault.propTypes = {
  children: node.isRequired,
  hideNavbar: bool,
};

export default PageDefault;
