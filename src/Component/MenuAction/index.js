import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import {Color, Font} from '../../Constant';

export default function MenuAction() {
  const navigation = useNavigation();

  const handleDrawerToggle = useCallback(
    function () {
      navigation.openDrawer();
    },
    [navigation],
  );

  return (
    <TouchableOpacity onPress={handleDrawerToggle}>
      <Entypo name="menu" size={Font.NORMAL} color={Color.LIGHT} />
    </TouchableOpacity>
  );
}
