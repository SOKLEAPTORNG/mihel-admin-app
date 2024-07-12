import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color} from '../../Constant';

const AppCustomHeader = ({children, flexDirection, justifyContent}) => {
  return <View style={[styles.container, {flexDirection, justifyContent}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    paddingHorizontal: 15,
    backgroundColor: Color.LIGHT,
    alignItems: 'center',
  },
});

export default AppCustomHeader;
