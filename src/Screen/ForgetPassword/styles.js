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
  forgetPassDescription: {
    textAlign: 'center',
    color: Color.DARK,
    fontSize: 17,
    marginBottom: 30,
  },
  phoneInputContainer: {
    width: '100%',
    height: 52,
    position: 'relative',
    backgroundColor: Color.LIGHT,
    flexDirection: 'row',
    borderRadius: 9,
  },
  flagSideContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  khFlag: {
    width: 38,
    height: 38,
    resizeMode: 'stretch',
  },
  codeLabel: {
    marginLeft: 5,
    color: Color.GRAY,
    fontSize: 16,
  },
  downIcon: {
    color: Color.GRAY,
    fontSize: 15,
    marginLeft: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
