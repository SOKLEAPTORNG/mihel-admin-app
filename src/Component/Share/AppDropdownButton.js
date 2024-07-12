import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Color} from '../../Constant';
import AppText from './AppText';
import Icon from 'react-native-vector-icons/Ionicons';

const AppDropdownButton = ({label, onPress, marginBottom, iconName, style}) => {
  return (
    <View style={[styles.container, {marginBottom}]}>
      <AppText style={[styles.label, style]}>{label}</AppText>
      <TouchableOpacity onPress={onPress}>
        <Icon style={styles.icon} name={iconName} />
      </TouchableOpacity>
    </View>
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
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    borderRadius: 10,
    zIndex: -1,
  },
  label: {
    fontSize: 12,
    color: Color.GRAY,
  },
  icon: {
    color: Color.DARK,
    fontSize: 14,
  },
});

export default AppDropdownButton;
