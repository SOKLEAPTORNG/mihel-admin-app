import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import AppText from './AppText';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppButton = ({
  iconSource,
  label,
  marginTop,
  marginBottom,
  backgroundColor,
  style,
  imageStyle,
  alignSelf = 'flex-start',
  onPress,
  iconName,
  iconStyle,
  marginLeft,
  marginRight,
  width,
  justifyContent,
  borderRadius = 5,
  padding = 10,
  paddingVertical,
  paddingHorizontal,
  position,
  right,
  top,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          marginTop,
          marginBottom,
          backgroundColor,
          alignSelf,
          marginLeft,
          marginRight,
          borderRadius,
          padding,
          width,
          justifyContent,
          paddingVertical,
          paddingHorizontal,
          position,
          right,
          top,
        },
      ]}>
      {iconSource ? (
        <Image style={imageStyle} source={iconSource} />
      ) : (
        <Icon style={iconStyle} name={iconName} />
      )}
      <AppText style={style}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppButton;
