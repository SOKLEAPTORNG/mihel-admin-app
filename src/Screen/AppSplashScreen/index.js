import React from 'react';
import {View, Image} from 'react-native';
import AppText from '../../Component/Share/AppText';
import images from '../../common/images';
import {styles} from './styles';

const AppSplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.appLogo} source={images.AppLogo()} />
      <AppText style={styles.appTitle}>CTL79 Seller</AppText>
      <View style={styles.bottomContent}>
        <AppText style={styles.defaultText}>Version 1.0</AppText>
        <AppText style={styles.defaultText}>CTL79 Copyright</AppText>
      </View>
    </View>
  );
};

export default AppSplashScreen;
