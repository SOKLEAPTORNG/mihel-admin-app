import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import {Color} from '../../Constant';

export default function StockReportDetail() {
  const RowItem = ({label, amount, isFirst, isLast, style}) => (
    <View
      style={[
        styles.rowContainer,
        {
          marginTop: isFirst ? 15 : 0,
          borderTopLeftRadius: isFirst ? 10 : 0,
          borderTopRightRadius: isFirst ? 10 : 0,
          borderBottomLeftRadius: isLast ? 10 : 0,
          borderBottomRightRadius: isLast ? 10 : 0,
          marginBottom: isLast ? 15 : 0,
        },
      ]}>
      <AppText style={styles.label}>{label}</AppText>
      <AppText style={[styles.amount, style]}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <RowItem label={'SKU:'} amount={'B006'} isFirst={true} />
        <RowItem
          label={'Product:'}
          amount={'Hotdog chicken'}
          style={{color: Color.GRAY}}
        />
        <RowItem label={'Unit Price:'} amount={'$2.50'} />
        <RowItem label={'Current Stock:'} amount={'$100.00'} />
        <RowItem
          label={'Current Stock Value(By Purchase Price):'}
          amount={'$0.00'}
        />
        <RowItem
          label={'Current Stock Value(By Sale Price):'}
          amount={'$0.00'}
        />
        <RowItem label={'Potential:'} amount={'$0.00'} />
        <RowItem label={'Total Unit Sold:'} amount={'$0.00'} />
        <RowItem label={'Total Unit transfered:'} amount={'$0.00'} />
        <RowItem
          label={'Total Unit Adjusted:'}
          amount={'$0.00'}
          isLast={true}
        />
      </ScrollView>
    </Layout>
  );
}
