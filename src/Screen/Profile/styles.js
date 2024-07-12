import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 324,
    backgroundColor: Color.SUCCESS,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  absoluteContainer: {
    width: '65%',
    height: '82%',
    borderBottomRightRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'absolute',
    top: -5,
    left: -10,
    zIndex: 1,
  },
  logo: {
    width: 106,
    height: 107,
    resizeMode: 'stretch',
    zIndex: 2,
  },
  companyLabel: {
    fontSize: 18,
    color: Color.LIGHT,
    marginTop: 5,
    zIndex: 2,
  },
  rowContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Color.LIGHT,
    marginBottom: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  labelButton: {
    fontSize: 14,
    color: Color.DARK,
    marginLeft: 10,
  },
  rightArrowIcon: {
    fontSize: 25,
    color: Color.SUCCESS,
    position: 'absolute',
    right: 20,
  },
});
