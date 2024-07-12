import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  appLogo: {
    height: 107,
    width: 105,
    resizeMode: 'stretch',
    marginTop: 15,
  },
  selectLanguageLabel: {
    fontSize: 18,
    color: Color.DARK,
    marginTop: 20,
  },
  languageContainer: {
    height: 160,
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  languageButton: {
    height: '100%',
    width: 160,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    backgroundColor: Color.LIGHT,
    position: 'relative',
  },
  checkContainer: {
    width: 20,
    height: 20,
    borderRadius: 1000,
    backgroundColor: Color.SUCCESS,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10
  },
  checkIcon: {
    fontSize: 15,
    color: Color.LIGHT
  },
  languageWrapper: {
    width: 78,
    height: 77,
    borderRadius: 10,
    color: Color.DARK,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.DARK
  },
  flagLogo: {
    width: 47,
    height: 34,
    resizeMode: 'stretch',
  },
  languageLabel: {
    fontSize: 15,
    color: Color.DARK,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
