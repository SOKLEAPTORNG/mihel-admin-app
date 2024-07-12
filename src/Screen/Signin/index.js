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
import {Color} from '../../Constant';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

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
            <AppText style={styles.loginLabel}>Login</AppText>
            <AppInput placeholder={'Username'} />
            <AppInput placeholder={'Password'} marginTop={15}>
              <TouchableOpacity style={styles.eyeContainer}>
                <Icon style={styles.eyeIcon} name="eye-off-outline" />
              </TouchableOpacity>
            </AppInput>
            <View style={styles.rowContainer}>
              <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
              <AppText style={styles.rememberMeLabel}>Remember me</AppText>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPasswordScreen')}
                style={styles.forgetPassContainer}>
                <AppText style={styles.forgetPassLebel}>
                  Forget password
                </AppText>
              </TouchableOpacity>
            </View>
            <AppLongButton onPress={() => navigation.navigate('HOME_STACK')} marginTop={35} title={'Login'} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default Signin;
