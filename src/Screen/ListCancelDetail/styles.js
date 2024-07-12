import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
  },
  defaultText: {
    fontSize: 14,
    color: Color.DARK,
  },
  rowProduct: {
    height: 58,
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    position: 'relative',
  },
  productImageSide: {
    height: '100%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  productAmountSide: {
    height: '100%',
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  productLabel: {
    fontSize: 16,
    color: Color.DARK,
  },
  productPriceLabel: {
    fontSize: 16,
    color: Color.SUCCESS,
    position: 'absolute',
    top: 10,
  },
  labelStyle: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  input: {
    height: 60,
    borderRadius: 10,
    width: '100%',
    padding: 15,
    backgroundColor: Color.LIGHT,
    fontSize: 16,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonContent: {
    marginTop: 5,
    paddingRight: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
});
