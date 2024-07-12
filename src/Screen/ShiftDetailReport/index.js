import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import {Color} from '../../Constant';
import AppButton from '../../Component/Share/AppButton';
import {useNavigation} from '@react-navigation/native';

export default function ShiftDetailReport() {
  const navigation = useNavigation();
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
          marginBottom: isLast ? 5 : 0,
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
        <RowItem
          label={'User Name:'}
          amount={'Admin Mihel 7 Yang'}
          isFirst={true}
        />
        <RowItem label={'Email:'} amount={'admin@eocambo.com'} />
        <RowItem label={'Date:'} amount={'27-Oct-2023'} />
        <RowItem label={'Time:'} amount={'10:53 AM'} />
        <RowItem
          label={'Location:'}
          amount={'Mihel Seoul 7 Yang 1'}
          isLast={true}
        />

        <RowItem label={'Total Cash:'} amount={'$ 22.55'} isFirst={true} />
        <RowItem label={'Total Bank Transfer:'} amount={'$ 0.00'} />
        <RowItem label={'Sale Amount:'} amount={'$ 22.55'} />
        <RowItem label={'Open Cash:'} amount={'$ 0.00'} />
        <RowItem label={'Total Amount:'} amount={'$ 22.55'} isLast={true} />
        <AppButton
          borderRadius={3}
          marginRight={5}
          marginTop={10}
          alignSelf="flex-end"
          backgroundColor={Color.SUCCESS}
          label={'More Detail'}
          style={{
            fontSize: 16,
            color: Color.LIGHT,
          }}
          onPress={() => navigation.navigate('ShiftMoreDetailReport')}
        />
      </ScrollView>
    </Layout>
  );
}
