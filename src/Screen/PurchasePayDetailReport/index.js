import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import {Color} from '../../Constant';
import AppButton from '../../Component/Share/AppButton';
import images from '../../common/images';

export default function PurchasePayDetailReport() {
  const RowItem = ({label, amount, isFirst, isLast}) => (
    <View
      style={[
        styles.rowContainer,
        {
          marginTop: isFirst ? 10 : 0,
          borderTopLeftRadius: isFirst ? 10 : 0,
          borderTopRightRadius: isFirst ? 10 : 0,
          borderBottomLeftRadius: isLast ? 10 : 0,
          borderBottomRightRadius: isLast ? 10 : 0,
          marginBottom: isLast ? 15 : 0,
        },
      ]}>
      <AppText style={styles.label}>{label}</AppText>
      <AppText style={styles.amount}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.buttonContent}>
          <AppButton
            marginRight={5}
            backgroundColor={Color.APPBUTTON}
            iconSource={images.PrintIcon()}
            imageStyle={{
              width: 14.5,
              height: 15,
              resizeMode: 'stretch',
              tintColor: Color.DARKSUCCESS,
            }}
            label={'Print'}
            style={{
              fontSize: 12,
              color: Color.DARKSUCCESS,
              marginLeft: 5,
            }}
          />
          <AppButton
            backgroundColor={Color.APPBUTTON}
            iconName={'file-pdf'}
            iconStyle={{color: Color.DARKSUCCESS, fontSize: 15}}
            label={'Export to PDF'}
            style={{
              fontSize: 12,
              color: Color.DARKSUCCESS,
              marginLeft: 5,
            }}
          />
        </View>
        <RowItem label={'Referent No:'} amount={'PP2023/0001'} isFirst={true} />
        <RowItem label={'Supplier:'} amount={'Data Meat Shop Dara'} />
        <RowItem label={'Tax Number:'} amount={'01'} />
        <RowItem label={'Mobile:'} amount={'088 543 327'} />
        <RowItem label={'Business:'} amount={'Easy Buy Easy Buy'} />
        <RowItem label={'Location:'} amount={'Siem Reap, Siem Reap'} />
        <RowItem label={'Amount:'} amount={'$300.00'} />
        <RowItem label={'Payment method:'} amount={'Cash'} />
        <RowItem label={'Reference No:'} amount={'PP2023/0001'} />
        <RowItem label={'Paid on:'} amount={'11/21/2023 10:11 AM'} isLast={true} />
      </ScrollView>
    </Layout>
  );
}
