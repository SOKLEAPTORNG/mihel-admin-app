import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';

const AppInput = ({placeholder, marginTop, children, marginBottom}) => {
  return (
    <View style={[styles.container, {marginTop, marginBottom}]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Color.PLACEHOLDER}></TextInput>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    position: 'relative',
  },
  input: {
    height: '100%',
    width: '100%',
    backgroundColor: Color.LIGHT,
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 9,
  },
});

export default AppInput;
