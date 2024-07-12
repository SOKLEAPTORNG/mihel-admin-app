import React, {useCallback} from 'react';
import {View, Image, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import images from '../../common/images';
import {Layout} from '../../Component';
import {Color} from '../../Constant';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';

const VerifyOTP = () => {
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
            <AppText style={styles.boldText}>Verify OTP</AppText>
            <AppText style={styles.otpDescription}>
              Enter the verification code (OTP) sent to{' '}
              <AppText style={styles.phoneNumLabel}>+85585243659</AppText>
            </AppText>
            <OTPTextInput
              autoFocus
              inputCount={6}
              tintColor={Color.GRAY}
              offTintColor={Color.GRAY}
              containerStyle={{width: '100%'}}
              textInputStyle={{
                borderRadius: 5,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 1,
                width: 45,
                height: 47,
                borderBottomWidth: 0.5,
              }}
            />
            <AppLongButton
              marginTop={35}
              title={'Next'}
              onPress={() =>
                navigation.navigate('CreatePasswordScreen', {
                  sourceScreen: 'VerifyOTPScreen',
                })
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default VerifyOTP;
