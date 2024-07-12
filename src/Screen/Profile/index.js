import React from 'react';
import {View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import images from '../../common/images';
import AppText from '../../../src/Component/Share/AppText';
import Icon from 'react-native-vector-icons/Octicons';
import {Color} from '../../Constant';
import {useNavigation} from '@react-navigation/core';

const ButtonContainer = ({iconSource, label, onPress, color}) => (
  <TouchableOpacity style={styles.rowContainer} onPress={onPress}>
    <Image style={styles.buttonIcon} source={iconSource} />
    <AppText style={[styles.labelButton, {color}]}>{label}</AppText>
    <Icon name="chevron-right" style={styles.rightArrowIcon} />
  </TouchableOpacity>
);

export default function Profile() {
  const navigation = useNavigation();

  return (
    <Layout paddingHorizontal={0}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        <View style={styles.absoluteContainer} />
        <Image style={styles.logo} source={images.AppLogo()} />
        <AppText style={styles.companyLabel}>Mihel 7 Yang</AppText>
      </View>
      <ButtonContainer iconSource={images.EditIcon()} label="Edit Profile" 
      onPress={() => navigation.navigate('EditProfileScreen')}
      />
      <ButtonContainer
        onPress={() =>
          navigation.navigate('CreatePasswordScreen', {
            sourceScreen: 'PROFILE_STACK',
          })
        }
        iconSource={images.PasswordIcon()}
        label="Change Password"
      />
      <ButtonContainer
        iconSource={images.DeleteIcon()}
        color={Color.DANGER}
        label="Delete Account"
      />
    </Layout>
  );
}
