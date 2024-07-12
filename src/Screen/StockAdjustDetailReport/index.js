import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import {Color} from '../../Constant';
import AppCard from '../../Component/Share/AppCard';
import AppStroke from '../../Component/Share/AppStroke';

export default function StockAdjustDetailReport() {
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
      <AppText style={[styles.label, style]}>{label}</AppText>
      <AppText style={styles.darkText}>{amount}</AppText>
    </View>
  );

  const TotalItem = ({label, amount}) => (
    <View style={styles.totalItemContainer}>
      <AppText style={styles.darkText}>{label}</AppText>
      <AppText style={styles.darkText}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <RowItem label={'Date:'} amount={'29/29/2023 03:51'} isFirst={true} />
        <RowItem label={'Refereance No:'} amount={'SA2020/0001'} />
        <RowItem label={'Locations:'} amount={'Mihel Seoul - 01'} />
        <RowItem label={'Adjustments Type:'} amount={'Abnormal'} />
        <RowItem label={'Total Amount:'} amount={'$ 50.00'} />
        <RowItem label={'Total Amount Recovered :'} amount={'$0.00'} />
        <RowItem label={'Reason:'} amount={'Test'} />
        <RowItem label={'Added By:'} amount={'Mr Easy Buy'} isLast={true} />

        <AppCard paddingTop={5} marginTop={15}>
          <TotalItem
            style={styles.darkText}
            label={'10 x Bacchus'}
            amount={'$5.00'}
          />
          <AppStroke marginVertical={5} />
          <TotalItem
            style={styles.darkText}
            label={'SubTotal  :'}
            amount={'$50.00'}
          />
        </AppCard>
      </ScrollView>
    </Layout>
  );
}
