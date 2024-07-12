import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {Color, Font} from '../../Constant';

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  screen: PropTypes.string,
  onAction: PropTypes.func,
};

export default function DrawerMenuItem({title, icon, screen, onAction}) {
  const navigation = useNavigation();

  const handlePress = useCallback(
    function () {
      navigation.navigate(screen);
    },
    [screen, navigation],
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={typeof onAction === 'function' ? onAction : handlePress}>
      <View style={styles.content}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
      <Entypo
        name="chevron-small-right"
        size={Font.NORMAL}
        color={Color.LIGHT}
      />
    </TouchableOpacity>
  );
}

DrawerMenuItem.propTypes = propTypes;
