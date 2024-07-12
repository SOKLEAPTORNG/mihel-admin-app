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
import {Color} from '../../Constant';
import images from '../../common/images';
import AppStroke from '../../Component/Share/AppStroke';
import AppButton from '../../Component/Share/AppButton';

export default function ListDraftDetail() {
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const RowItem = ({label, labelData, color}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.defaultText}>{label}</AppText>
      <AppText style={[styles.defaultText, {color}]}>{labelData}</AppText>
    </View>
  );

  const ProductItem = ({productLabel, productPrice, productImage}) => (
    <View style={styles.rowProduct}>
      <View style={styles.productImageSide}>
        <Image style={styles.productImage} source={productImage} />
        <AppText style={styles.productLabel}>{productLabel}</AppText>
      </View>
      <View style={styles.productAmountSide}>
        <AppText style={styles.productPriceLabel}>{productPrice}</AppText>
      </View>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT} paddingHorizontal={0}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.screen}>
              <AppText style={styles.labelStyle}>Info</AppText>
              <RowItem label={'Invoice No:'} labelData={'47456052'} />
              <RowItem label={'Phone number:'} labelData={'012 546 897'} />
              <RowItem label={'Customer Name:'} labelData={'Ricky Nach'} />
              <RowItem
                label={'Address:'}
                labelData={'Street 18D , Siem Reap'}
              />
              <RowItem label={'Date:'} labelData={'29-1-2023 03-51 pm'} />
              <RowItem
                label={'Payment Status:'}
                labelData={'Paid'}
                color={Color.SUCCESS}
              />
              <RowItem
                label={'Order Status:'}
                labelData={'Final'}
                color={Color.SUCCESS}
              />
            </View>
            <AppStroke marginVertical={10} />
            <View style={styles.screen}>
              <AppText style={styles.labelStyle}>Products</AppText>
              <ProductItem
                productImage={images.StaticProductImage()}
                productLabel={'1 x Noodle soup'}
                productPrice={'$18.00'}
              />
            </View>
            <AppStroke marginVertical={10} />
            <View style={styles.screen}>
              <AppText style={styles.labelStyle}>Payment Info</AppText>
              <RowItem label={'Total:'} labelData={'$25.00'} />
              <RowItem label={'Discount:'} labelData={'$25.00'} />
              <RowItem label={'Packing Charge:'} labelData={'$25.00'} />
              <RowItem label={'Service Charge 10%:'} labelData={'$25.00'} />
              <RowItem label={'Tax:'} labelData={'VAT10%-$25.00'} />
              <RowItem label={'Delivery Fee:'} labelData={'$25.00'} />
              <RowItem label={'Total Amount:'} labelData={'$25.00'} />
              <RowItem label={'Total Paid:'} labelData={'$25.00'} />
              <RowItem label={'Total remaining:'} labelData={'$25.00'} />
            </View>
            <AppStroke marginVertical={10} />
            <View style={styles.screen}>
              <AppText style={styles.labelStyle}>Sell Note</AppText>
              <TextInput placeholder="Note" style={styles.input} />
              <AppText style={styles.labelStyle}>Stuff Note</AppText>
              <TextInput placeholder="Note" style={styles.input} />
            </View>
            <View style={styles.buttonContent}>
              <AppButton
                backgroundColor={Color.SUCCESS}
                iconSource={images.PrintIcon()}
                imageStyle={{
                  width: 14.5,
                  height: 15,
                  resizeMode: 'stretch',
                  tintColor: Color.LIGHT,
                }}
                label={'Print'}
                style={{
                  fontSize: 16,
                  color: Color.LIGHT,
                  marginLeft: 5,
                }}
              />
            </View>
          </ScrollView>
        </>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
