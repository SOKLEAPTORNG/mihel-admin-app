import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import DrawerMenuItem from '../DrawerMenuItem';
import {styles} from './styles';

const propTypes = {
  data: PropTypes.array,
};

export default function DrawerMenu({data}) {
  function renderItem({item}) {
    return (
      <DrawerMenuItem title={item.name} icon={item.icon} screen={item.screen} />
    );
  }

  function extractItemKey(item) {
    return item.id.toString();
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={extractItemKey}
    />
  );
}

DrawerMenu.propTypes = propTypes;
