import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  rowContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Color.LIGHT,
    marginTop: 15,
  },
  buttonIcon: {
    width: 21,
    height: 19.5,
    resizeMode: 'stretch',
  },
  labelButton: {
    fontSize: 14,
    color: Color.DARK,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rightArrowIcon: {
    fontSize: 25,
    color: Color.SUCCESS,
    position: 'absolute',
    right: 20,
  },
});
