import React from 'react';
import { string } from 'prop-types';
import { ItemBox, ItemLogo, ItemLink } from './styles';

function LinkItem({ itemLogo, itemText, itemLink }) {
  return (
    <ItemBox target="_blank" href={itemLink}>
      <ItemLogo src={itemLogo} />
      <ItemLink>{itemText}</ItemLink>
    </ItemBox>
  );
}

LinkItem.propTypes = {
  itemLogo: string.isRequired,
  itemText: string.isRequired,
  itemLink: string.isRequired,
};

export default LinkItem;
