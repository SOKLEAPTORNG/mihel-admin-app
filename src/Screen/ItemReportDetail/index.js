import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import {Color} from '../../Constant';

export default function ItemReportDetail() {
  const RowItem = ({label, amount, isFirst, isLast}) => (
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
      <AppText style={styles.amount}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <RowItem label={'Product:'} amount={'Mihel Beef'} isFirst={true} />
        <RowItem label={'SKU:'} amount={'B006'} />
        <RowItem label={'Purchase Date:'} amount={'27-Oct-2023'} />
        <RowItem label={'Purchase:'} amount={'10:53 AM'} />
        <RowItem label={'Supplier:'} amount={'Mihel Seoul 7 Yang 1 '} />
        <RowItem label={'Purchase Price:'} amount={'$ 22.55'} />
        <RowItem label={'Sale Date:'} amount={'27-Oct-2023'} />
        <RowItem label={'Sale :'} amount={'$ 22.55'} />
        <RowItem label={'Customer:'} amount={'Theavann'} />
        <RowItem label={'Location:'} amount={'Mihel Seoul 7 Yang 1 '} />
        <RowItem label={'Quantity:'} amount={'1'} />
        <RowItem label={'Selling Price:'} amount={'$ 22.55'} />
        <RowItem label={'SubTotal:'} amount={'$ 22.55'} isLast={true} />
      </ScrollView>
    </Layout>
  );
}
