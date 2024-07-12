import React from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';

const propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func,
};

export default function PhoneInput({value, onValueChange}) {
  return (
    <View style={styles.container}>
      <Text style={styles.code}>+855</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onValueChange}
        keyboardType="phone-pad"
      />
    </View>
  );
}

PhoneInput.propTypes = propTypes;
