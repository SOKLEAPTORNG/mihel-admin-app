import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Color} from '../../Constant';

const AppCard = ({
  children,
  marginTop,
  marginBottom,
  activeOpacity = 1,
  padding = 15,
  paddingHorizontal,
  paddingVertical,
  isShowShadow = false,
  paddingTop,
  paddingBottom,
  onPress,
  borderRadius = 10,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        {
          marginTop,
          marginBottom,
          padding,
          paddingHorizontal,
          paddingVertical,
          paddingTop,
          paddingBottom,
          borderRadius,
        },
        isShowShadow ? styles.shadow : null,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.LIGHT,
    borderWidth: 0.5,
    borderColor: Color.STROKE,
  },
  shadow: {
    borderTopWidth: 0.5,
    shadowColor: Color.DARK,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default AppCard;
