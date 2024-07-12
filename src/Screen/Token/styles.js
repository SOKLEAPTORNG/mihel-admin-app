import {StyleSheet} from 'react-native';
import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Font.NORMAL,
  },
  button: {
    alignItems: 'center',
  },
  text: {
    color: Color.LIGHT,
    fontSize: Font.NORMAL,
    textAlign: 'center',
  },
});
