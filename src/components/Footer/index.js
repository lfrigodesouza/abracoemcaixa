import React from 'react';
import FooterBase from './styles';

function Footer() {
  return <FooterBase>{`© 2021/${new Date().getFullYear()} - Abraço em Caixa`}</FooterBase>;
}
export default Footer;
