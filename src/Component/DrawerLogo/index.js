import React from 'react';
import {View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {widthToDP as wp} from 'react-native-responsive-screens';

import {styles} from './styles';

export default function DrawerLogo() {
  return (
    <View style={styles.container}>
      <AutoHeightImage
        width={wp('50%')}
        source={require('../../assets/ic_launcher.png')}
      />
    </View>
  );
}
