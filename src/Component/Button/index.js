import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';

const propTypes = {
  title: PropTypes.string,
  onAction: PropTypes.func,
  sytle: PropTypes.object,
};

export default function Button({title, onAction, style}) {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      onPress={onAction}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = propTypes;
