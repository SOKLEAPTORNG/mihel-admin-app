import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color} from '../../Constant';

const AppStroke = ({width = '100%', marginTop, marginBottom, marginVertical}) => {
  return <View style={[styles.container, {width, marginTop, marginBottom, marginVertical}]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: Color.GRAY,
  },
});

export default AppStroke;
