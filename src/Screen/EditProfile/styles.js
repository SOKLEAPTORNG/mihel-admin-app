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
  logoContainer: {
    width: 106,
    height: 107,
    borderRadius: 1000,
    position: 'relative',
    zIndex: 2,
  },
  editLogoContainer: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 4,
    bottom: 4,
    zIndex: 3,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    zIndex: 2,
  },
  editIcon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    tintColor: Color.LIGHT,
  },
  companyLabel: {
    fontSize: 18,
    color: Color.LIGHT,
    marginTop: 5,
    zIndex: 2,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  personIcon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  phoneIcon: {
    fontSize: 24,
    color: Color.SUCCESS,
  },
  itemLabel: {
    fontSize: 14,
    color: Color.DARK,
    marginLeft: 10,
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
  updateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Color.SUCCESS,
    height: 50,
    width: 150,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  updateProfileText: {
    fontSize: 16,
    color: Color.LIGHT,
  },
});
