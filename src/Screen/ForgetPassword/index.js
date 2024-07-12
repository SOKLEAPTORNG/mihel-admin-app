import React, {useCallback} from 'react';
import {
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import images from '../../common/images';
import {Layout} from '../../Component';
import {Color} from '../../Constant';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgetPassword = () => {
  const navigation = useNavigation();

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout backgroundColor={Color.REGISTER_APPBACKGROUND}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={125}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <View style={styles.screen}>
            <Image style={styles.logo} source={images.AppLogo()} />
            <AppText style={styles.boldText}>Forget Password</AppText>
            <AppText style={styles.forgetPassDescription}>
              Please enter your registered Phone Number so that we can help you
              to recover your password.
            </AppText>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity style={styles.flagSideContainer}>
                <Image style={styles.khFlag} source={images.KhmerFlag()} />
                <AppText style={styles.codeLabel}>+855</AppText>
                <Icon style={styles.downIcon} name="caret-down-sharp" />
              </TouchableOpacity>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder={'Input Phone Number'}
                placeholderTextColor={Color.PLACEHOLDER}
              />
            </View>
            <AppLongButton
              onPress={() => navigation.navigate('VerifyOTPScreen')}
              marginTop={35}
              title={'Next'}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default ForgetPassword;
