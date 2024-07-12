import React, {useCallback} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import images from '../../common/images';

export default function ProductSellDetailReport() {
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const RowItem = ({label, labelData}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.defaultText}>{label}</AppText>
      <AppText style={styles.defaultText}>{labelData}</AppText>
    </View>
  );

  const RowContent = ({label, amount}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.contentLabel}>{label}</AppText>
      <AppText style={styles.contentData}>{amount}</AppText>
    </View>
  );

  const ProductItem = ({productLabel, productAmount, productImage}) => (
    <View style={styles.rowProduct}>
      <View style={styles.productImageSide}>
        <Image style={styles.productImage} source={productImage} />
        <AppText style={styles.productLabel}>{productLabel}</AppText>
      </View>
      <View style={styles.productAmountSide}>
        <AppText style={styles.productLabel}>{productAmount}</AppText>
      </View>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT} paddingHorizontal={0}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <>
          <View style={styles.screen}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <View style={styles.subScreen}>
                <RowItem
                  label={'Invoice:  #Easybuy-98866848'}
                  labelData={'Status: Final'}
                />
                <RowItem
                  label={'Payments status: Due'}
                  labelData={'Customer name: thai '}
                />
                <RowItem label={'Address:'} labelData={'Mobile: 088523692'} />
                <AppText style={[styles.defaultText, {marginTop: 10}]}>
                  Products
                </AppText>
                <ProductItem
                  productImage={images.StaticProductImage()}
                  productLabel={'2 x Noodle soup'}
                  productAmount={'$2.00'}
                />
                <ProductItem
                  productImage={images.StaticProductImage2()}
                  productLabel={'1 x Mihel Seafood'}
                  productAmount={'$2.50'}
                />
                <ProductItem
                  productImage={images.StaticProductImage2()}
                  productLabel={'1 x Mihel Mix all'}
                  productAmount={'$2.50'}
                />
              </View>
              <AppCard
                paddingHorizontal={5}
                paddingTop={10}
                paddingBottom={45}
                marginTop={10}
                marginBottom={10}>
                <AppText style={styles.labelStyle}>Payment Info:</AppText>
                <View style={styles.rowPaymentContainer}>
                  <View style={{width: '21%'}}>
                    <AppText style={styles.grayText}># Date</AppText>
                    <AppText style={styles.paymentDataText}>
                      1 01/17/2024
                    </AppText>
                  </View>
                  <View style={{width: '21%'}}>
                    <AppText style={styles.grayText}>Refernce No</AppText>
                    <AppText style={styles.paymentDataText}>
                      SP2024/0702
                    </AppText>
                  </View>
                  <View style={{width: '14%'}}>
                    <AppText style={styles.grayText}>Amount</AppText>
                    <AppText style={styles.paymentDataText}>$ 7.00</AppText>
                  </View>
                  <View style={{width: '24%'}}>
                    <AppText style={styles.grayText}>Payment mode</AppText>
                    <AppText style={styles.paymentDataText}>Cash</AppText>
                  </View>
                  <View style={{width: '20%'}}>
                    <AppText style={styles.grayText}>Payment note</AppText>
                    <AppText style={styles.paymentDataText}>Pay done</AppText>
                  </View>
                </View>
              </AppCard>
              <View style={styles.subScreen}>
                <AppText style={styles.labelStyle}>sell note</AppText>
                <TextInput placeholder=".............." style={styles.input} />
                <AppText style={styles.labelStyle}>Staff note:</AppText>
                <TextInput placeholder=".............." style={styles.input} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.fixContent}>
            <AppText style={styles.fixContentTitle}>Total</AppText>
            <RowContent label={'Total Quantity'} amount={'3'} />
            <RowContent label={'Total Item Discount'} amount={'$ 0.00'} />
            <RowContent label={'Total Bill Discount'} amount={'$ 0.00'} />
            <RowContent label={'Total'} amount={'$ 67.65'} />
            <RowContent label={'Total Grand Total'} amount={'$ 67.65'} />
          </View>
        </>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
