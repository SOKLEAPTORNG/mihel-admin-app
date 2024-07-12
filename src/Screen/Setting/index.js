import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, TouchableOpacity} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import images from '../../common/images';
import AppText from '../../../src/Component/Share/AppText';
import Icon from 'react-native-vector-icons/Octicons';

export default function Setting() {
  const navigation = useNavigation();

  return (
    <Layout paddingHorizontal={0}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LanguageScreen')}
        style={styles.rowContainer}>
        <Image style={styles.buttonIcon} source={images.LanguageIcon()} />
        <AppText style={styles.labelButton}>Choose Language</AppText>
        <Icon name="chevron-right" style={styles.rightArrowIcon} />
      </TouchableOpacity>
    </Layout>
  );
}
