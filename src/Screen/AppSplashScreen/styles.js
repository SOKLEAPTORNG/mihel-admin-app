import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.LIGHT,
    position: 'relative',
  },
  appLogo: {
    width: 162,
    height: 164,
    resizeMode: 'stretch',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.SUCCESS,
    marginTop: 5,
  },
  bottomContent: {
    position: 'absolute',
    bottom: 15,
  },
  defaultText: {
    fontSize: 12,
    color: Color.DARK,
    textAlign: 'center',
  },
});
