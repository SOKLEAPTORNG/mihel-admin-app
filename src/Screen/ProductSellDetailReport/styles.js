import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },
  subScreen: {
    flex: 1,
    paddingHorizontal: 5,
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
  },
  productImageSide: {
    height: '100%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 65,
    height: 58,
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
  rowPaymentContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  labelStyle: {
    fontSize: 12,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  contentLabel: {
    fontSize: 16,
    color: Color.DARK,
  },
  contentData: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  grayText: {
    color: Color.GRAY,
    fontSize: 10,
    marginTop: 5,
  },
  paymentDataText: {
    fontSize: 10,
    color: Color.DARK,
    marginTop: 5,
  },
  input: {
    height: 42,
    borderRadius: 20,
    width: '100%',
    padding: 15,
    backgroundColor: Color.DARKGRAY,
    fontSize: 12,
    marginVertical: 10,
  },
  fixContent: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    backgroundColor: Color.LIGHT,
    borderTopColor: Color.STROKE,
    borderTopWidth: 0.5,
    shadowColor: Color.DARK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  fixContentTitle: {
    fontSize: 20,
    color: Color.DARK,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
});
