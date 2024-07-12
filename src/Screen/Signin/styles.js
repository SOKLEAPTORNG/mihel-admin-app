import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  logo: {
    height: 164,
    width: 162,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  loginLabel: {
    fontSize: 20,
    color: Color.DARK,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
  },
  eyeContainer: {
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    height: '100%',
  },
  eyeIcon: {
    fontSize: 20,
    color: Color.PLACEHOLDER,
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
  },
  checkBox: {
    width: 26,
    height: 26,
    borderWidth: 1.7,
    borderColor: Color.GRAY,
    borderRadius: 9,
    alignItems: 'center',
  },
  rememberMeLabel: {
    color: Color.DARK,
    fontSize: 18,
    marginLeft: 10,
  },
  forgetPassContainer: {
    position: 'absolute',
    right: 0,
  },
  forgetPassLebel: {
    color: Color.DANGER,
    fontSize: 18,
    marginTop: 5,
  },
});
