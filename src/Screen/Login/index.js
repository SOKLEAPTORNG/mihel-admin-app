import React, {useCallback, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button, Layout, PhoneInput, OTP} from '../../Component';
import {styles} from './styles';
import {Color, Font, GOOGLE_WEB_CLIENT} from '../../Constant';
import {LoadingActions, UserActions} from '../../Store/Action';
import {User} from '../../Model';

export default function Login() {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [OTPVisible, setOTPVisible] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT,
  });

  const handleKeyboardDismiss = useCallback(function () {
    Keyboard.dismiss();
  }, []);

  const handleOTPVisibleToggle = useCallback(function () {
    setOTPVisible(function (state) {
      return !state;
    });
  }, []);

  const handleLoginWithPhone = useCallback(
    async function () {
      dispatch(LoadingActions.loadingActive());

      try {
        const format = `+855${phone}`;
        const confirmation = await auth().signInWithPhoneNumber(format);
        setConfirmation(confirmation);
        handleOTPVisibleToggle();
      } catch (error) {
        console.error('Phone error', error);
      } finally {
        dispatch(LoadingActions.loadingInactive());
      }
    },
    [dispatch, handleOTPVisibleToggle, phone],
  );

  const handlePhoneChange = useCallback(function (value) {
    setPhone(value);
  }, []);

  const handleVerifyOTP = useCallback(
    async function () {
      dispatch(LoadingActions.loadingActive());
      handleOTPVisibleToggle();
      try {
        const response = await confirmation.confirm(code);
        const {user} = response;
        const data = new User(user.displayName, user.email, user.phoneNumber);
        dispatch(UserActions.setUser(data));
        navigation.goBack();
      } catch (error) {
        console.error('OTP error', error);
      } finally {
        dispatch(LoadingActions.loadingInactive());
      }
    },
    [confirmation, dispatch, handleOTPVisibleToggle, code, navigation],
  );

  const handleLoginWithGoogle = useCallback(
    async function () {
      dispatch(LoadingActions.loadingActive());

      try {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
        const {idToken: token} = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(token);
        const response = await auth().signInWithCredential(credential);

        const {user} = response;
        const data = new User(user.displayName, user.email, user.phoneNumber);
        dispatch(UserActions.setUser(data));
        navigation.goBack();
      } catch (error) {
        console.log('google error', error);
      } finally {
        dispatch(LoadingActions.loadingInactive());
      }
    },
    [dispatch, navigation],
  );

  return (
    <Layout>
      <TouchableWithoutFeedback
        style={styles.mainContainer}
        onPress={handleKeyboardDismiss}>
        <KeyboardAvoidingView
          style={styles.mainContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <AntDesign name="user" color={Color.LIGHT} size={Font.XXXLARGE} />
            <PhoneInput value={phone} onValueChange={handlePhoneChange} />
            <Button
              style={styles.loginBtn}
              title="Login with phone number"
              onAction={handleLoginWithPhone}
            />
            <Text style={styles.text}>OR</Text>
            <Button
              title="Login with Google"
              style={styles.loginBtn}
              onAction={handleLoginWithGoogle}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <OTP
        value={code}
        setValue={setCode}
        visible={OTPVisible}
        onAction={handleVerifyOTP}
      />
    </Layout>
  );
}
