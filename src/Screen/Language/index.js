import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, TouchableOpacity, View} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import images from '../../common/images';
import AppText from '../../../src/Component/Share/AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Language() {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleLanguage = () => {
    setSelectedLanguage(prevLanguage =>
      prevLanguage === 'English' ? 'Khmer' : 'English',
    );
  };

  return (
    <Layout paddingHorizontal={0} alignItems={'center'}>
      <Image style={styles.appLogo} source={images.AppLogo()} />
      <AppText style={styles.selectLanguageLabel}>Select Language</AppText>
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={[styles.languageButton, {marginRight: 20}]}
          onPress={toggleLanguage}>
          {selectedLanguage === 'English' && (
            <View style={styles.checkContainer}>
              <Icon style={styles.checkIcon} name="check-bold" />
            </View>
          )}
          <View style={styles.languageWrapper}>
            <Image
              style={styles.flagLogo}
              source={images.EnglishFlagRadius()}
            />
          </View>
          <AppText style={styles.languageLabel}>English</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={toggleLanguage}>
          {selectedLanguage === 'Khmer' && (
            <View style={styles.checkContainer}>
              <Icon style={styles.checkIcon} name="check-bold" />
            </View>
          )}
          <View style={styles.languageWrapper}>
            <Image style={styles.flagLogo} source={images.KhmerFlagRadius()} />
          </View>
          <AppText style={styles.languageLabel}>Khmer</AppText>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
