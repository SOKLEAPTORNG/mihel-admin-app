import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  rowContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Color.LIGHT,
    marginTop: 5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  labelButton: {
    fontSize: 16,
    color: Color.DARK,
    marginLeft: 15,
    textTransform: 'capitalize'
  },
  rightArrowIcon: {
    fontSize: 25,
    color: Color.GRAY,
    position: 'absolute',
    right: 20,
  },
});
