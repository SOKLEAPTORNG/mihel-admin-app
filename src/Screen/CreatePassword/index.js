import React, {useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import images from '../../common/images';
import AppInput from '../../Component/Share/AppInput';
import {Layout} from '../../Component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../Constant';

const CreatePassword = ({route}) => {
  const navigation = useNavigation();
  
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const getSourceScreenTitle = () => {
    if (route.params && route.params.sourceScreen === 'VerifyOTPScreen') {
      return 'Login';
    } else if (route.params && route.params.sourceScreen === 'PROFILE_STACK') {
      return 'Change New Password';
    }
    return 'Create New Password';
  };

  const handleLongButtonPress = () => {
    if (route.params && route.params.sourceScreen === 'VerifyOTPScreen') {
      navigation.navigate('HOME_STACK');
    } else if (route.params && route.params.sourceScreen === 'PROFILE_STACK') {
      navigation.navigate('SigninScreen');
    } else {
    }
  };

  return (
    <Layout backgroundColor={Color.REGISTER_APPBACKGROUND}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={165}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <View style={styles.screen}>
            <Image style={styles.logo} source={images.AppLogo()} />
            <AppText style={styles.boldLabel}>Create New Password</AppText>
            <AppInput placeholder={'New Password'} marginTop={15}>
              <TouchableOpacity style={styles.eyeContainer}>
                <Icon style={styles.eyeIcon} name="eye-off-outline" />
              </TouchableOpacity>
            </AppInput>
            <AppInput placeholder={'Confirm Password'} marginTop={15}>
              <TouchableOpacity style={styles.eyeContainer}>
                <Icon style={styles.eyeIcon} name="eye-off-outline" />
              </TouchableOpacity>
            </AppInput>
            <AppLongButton
              marginTop={35}
              title={getSourceScreenTitle()}
              onPress={handleLongButtonPress}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default CreatePassword;
