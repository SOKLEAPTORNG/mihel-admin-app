import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import {Color} from '../../Constant';

export default function CustomerReportDetail() {
  const RowItem = ({label, amount, isFirst = false, isLast = false}) => (
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
        <RowItem label={'Total Purchase:'} amount={'$0.00'} isFirst={true} />
        <RowItem label={'Total Purchase Return:'} amount={'$0.00'} />
        <RowItem label={'Total Sale:'} amount={'$2.50'} />
        <RowItem label={'Total Sale Return:'} amount={'$0.00'} />
        <RowItem label={'Total Opening Balance Due:'} amount={'$0.00'} />
        <RowItem label={'Total Due:'} amount={'$0.00'} isLast={true} />
      </ScrollView>
    </Layout>
  );
}
