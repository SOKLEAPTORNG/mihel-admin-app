import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import {Color} from '../../Constant';
import AppStroke from '../../Component/Share/AppStroke';
import AppCard from '../../Component/Share/AppCard';

export default function ShiftMoreDetailReport() {
  const RowItem = ({label, amount, isFirst, isLast}) => (
    <View
      style={[
        styles.rowContainer,
        {
          borderTopLeftRadius: isFirst ? 10 : 0,
          borderTopRightRadius: isFirst ? 10 : 0,
          borderBottomLeftRadius: isLast ? 10 : 0,
          borderBottomRightRadius: isLast ? 10 : 0,
        },
      ]}>
      <AppText style={styles.label}>{label}</AppText>
      <AppText style={styles.darkTextDefault}>{amount}</AppText>
    </View>
  );

  const NoBorderRowItem = ({label, amount, color}) => {
    return (
      <View style={styles.noBorderRowItem}>
        <AppText style={styles.darkTextDefault}>{label}</AppText>
        <AppText style={[styles.darkTextDefault, {color}]}>{amount}</AppText>
      </View>
    );
  };

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <RowItem
            label={'User Name:'}
            amount={'Admin Mihel 7 Yang'}
            isFirst={true}
          />
          <RowItem label={'Email:'} amount={'admin@eocambo.com'} />
          <RowItem label={'Location:'} amount={'Mihel Seoul 7 Yang 1 '} />
          <RowItem label={'Opened:'} amount={'6th Jul, 2023 12:32 PM'} />
          <RowItem
            label={'Closed:'}
            amount={'21st Nov, 2023 08:30 AM'}
            isLast={true}
          />
        </View>
        <AppText style={styles.contentLabel}>Transaction</AppText>
        <View style={styles.contentContainer}>
          <RowItem label={'Transaction Final:'} amount={'5'} isFirst={true} />
          <RowItem label={'Transaction Cancel:'} amount={'0'} isLast={true} />
        </View>
        <AppText style={styles.contentLabel}>Cashier</AppText>
        <View style={styles.contentContainer}>
          <RowItem
            label={'Transaction Final:'}
            amount={'$0.00'}
            isFirst={true}
            isLast={true}
          />
        </View>
        <AppText style={styles.contentLabel}>Cashdrawer</AppText>
        <View style={styles.contentContainer}>
          <RowItem label={'Cash Sale:'} amount={'$0.00'} isFirst={true} />
          <RowItem label={'Cash In:'} amount={'$5.46'} />
          <RowItem label={'Cash Out:'} amount={'$0.00'} />
          <RowItem label={'Total Refund:'} amount={'$0.00'} />
          <RowItem label={'Close Amount:'} amount={'$0.00'} />
          <RowItem label={'System Amount:'} amount={'$0.00'} />
          <RowItem label={'Different Amount:'} amount={'$0.00'} isLast={true} />
        </View>
        <AppText style={styles.contentLabel}>Sale Summmary</AppText>
        <View style={styles.contentContainer}>
          <RowItem label={'Sale Amount:'} amount={'$90.20'} isFirst={true} />
          <RowItem label={'Discount:'} amount={'$0.00'} />
          <RowItem label={'Tax:'} amount={'$0.00'} />
          <RowItem label={'Total Due:'} amount={'$-90.20'} />
          <RowItem label={'Net Sale:'} amount={'$90.20'} />
          <RowItem label={'Grand Total:'} amount={'$-0.00'} isLast={true} />
        </View>
        <AppText style={styles.contentLabel}>Product Category Sold</AppText>
        <AppCard
          borderRadius={20}
          paddingTop={5}
          paddingBottom={15}
          paddingHorizontal={10}
          marginTop={10}
          marginBottom={10}>
          <NoBorderRowItem label={'6 x Spices'} amount={'$50.00'} />
          <NoBorderRowItem label={'2 x Meat'} amount={'$20.00'} />
          <NoBorderRowItem label={'3 x Fish'} amount={'$30.00'} />
          <AppStroke />
          <NoBorderRowItem label={'Total Product :'} amount={'11'} />
          <NoBorderRowItem label={'Total Price :'} amount={'$100.00'} />
        </AppCard>

        <AppText style={styles.contentLabel}>Payment Detail</AppText>
        <View style={styles.contentContainer}>
          <RowItem label={'Cash Payment:'} amount={'$0.00'} isFirst={true} />
          <RowItem label={'Cheque Payment:'} amount={'$0.00'} />
          <RowItem label={'Card Payment :'} amount={'$0.00'} />
          <RowItem label={'Bank Transfer:'} amount={'$0.00'} />
          <RowItem label={'Custom Payment 1:'} amount={'$0.00'} />
          <RowItem label={'Custom Payment 2:'} amount={'$0.00'} />
          <RowItem label={'Custom Payment 3:'} amount={'$0.00'} />
          <RowItem label={'Order Payments:'} amount={'$0.00'} />
          <RowItem label={'Total Payment:'} amount={'$0.00'} isLast={true} />
        </View>

        <AppText style={styles.contentLabel}>Transaction Detail</AppText>
        <AppCard
          borderRadius={20}
          paddingTop={5}
          paddingBottom={15}
          paddingHorizontal={10}
          marginTop={10}
          marginBottom={15}>
          <NoBorderRowItem label={'No :'} amount={'1'} />
          <NoBorderRowItem label={'Inv#:'} amount={'Easybuy-0212122558'} />
          <NoBorderRowItem label={'Time:'} amount={'15:36'} />
          <NoBorderRowItem
            label={'Status:'}
            amount={'Paid'}
            color={Color.SUCCESS}
          />
          <NoBorderRowItem label={'Dis Amt:'} amount={'$0.00'} />
          <NoBorderRowItem label={'Total Amt:'} amount={'$5.46'} />
          <NoBorderRowItem
            label={'Pay By:'}
            amount={'Cash'}
            color={Color.SUCCESS}
          />
        </AppCard>
      </ScrollView>
    </Layout>
  );
}
