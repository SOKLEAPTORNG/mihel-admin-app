import {StyleSheet} from 'react-native';
import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Font.NORMAL,
    paddingHorizontal: Font.NORMAL,
  },
  mainContainer: {
    flex: 1,
  },
  loginBtn: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: Color.LIGHT,
    fontSize: Font.DEFAULT,
  },
});
