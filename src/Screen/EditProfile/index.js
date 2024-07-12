import React, {useCallback} from 'react';
import {
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Layout} from '../../Component';
import {styles} from './styles';
import images from '../../common/images';
import AppText from '../../../src/Component/Share/AppText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppInput from '../../Component/Share/AppInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../../Constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function EditProfile() {
  const navigation = useNavigation();

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout paddingHorizontal={0}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={145}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <>
            <View style={styles.headerContainer}>
              <View style={styles.absoluteContainer} />
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={images.AppLogo()} />
                <TouchableOpacity style={styles.editLogoContainer}>
                  <Image style={styles.editIcon} source={images.EditIcon()} />
                </TouchableOpacity>
              </View>
              <AppText style={styles.companyLabel}>Mihel 7 Yang</AppText>
            </View>
            <View style={styles.screen}>
              <View style={styles.rowContainer}>
                <Image style={styles.personIcon} source={images.PersonIcon()} />
                <AppText style={styles.itemLabel}>Full Name</AppText>
              </View>
              <AppInput placeholder={'Input Name'} marginBottom={15} />
              <View style={styles.rowContainer}>
                <Icon name="phone" style={styles.phoneIcon} />
                <AppText style={styles.itemLabel}>Phone Number</AppText>
              </View>
              <View style={styles.phoneInputContainer}>
                <TouchableOpacity style={styles.flagSideContainer}>
                  <Image style={styles.khFlag} source={images.KhmerFlag()} />
                  <AppText style={styles.codeLabel}>+855</AppText>
                  <Ionicons style={styles.downIcon} name="caret-down-sharp" />
                </TouchableOpacity>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder={'Input Phone Number'}
                  placeholderTextColor={Color.PLACEHOLDER}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.updateContainer} onPress={() => (
              navigation.navigate('PROFILE_STACK')
            )}>
              <AppText style={styles.updateProfileText}>Update Profile</AppText>
            </TouchableOpacity>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Layout>
  );
}
