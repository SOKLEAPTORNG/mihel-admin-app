import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import {Color} from '../../Constant';

const AppLongButton = ({title, marginTop, onPress, marginBottom}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.continer, {marginTop, marginBottom}]}>
      <AppText style={styles.label}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.SUCCESS,
  },
  label: {
    fontSize: 16,
    color: Color.LIGHT,
  },
});

export default AppLongButton;
