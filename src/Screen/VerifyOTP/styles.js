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
  boldText: {
    fontSize: 20,
    color: Color.DARK,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  otpDescription: {
    textAlign: 'center',
    color: Color.DARK,
    fontSize: 16,
    marginBottom: 25,
  },
  phoneNumLabel: {
    color: Color.DARK,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
