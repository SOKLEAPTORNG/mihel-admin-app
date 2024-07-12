import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Color} from '../../Constant';
import AppText from './AppText';

const AppSelectDateButton = ({label, onPress, imageSource}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.imageStyle} source={imageSource} />
      <AppText style={styles.label}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    paddingHorizontal: 15,
    backgroundColor: Color.LIGHT,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    borderRadius: 10,
    zIndex: -1,
  },
  imageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  label: {
    fontSize: 12,
    color: Color.GRAY,
    marginLeft: 10,
  },
});

export default AppSelectDateButton;
