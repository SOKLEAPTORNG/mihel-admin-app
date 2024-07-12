import React from 'react';
import {View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import {Color} from '../../Constant';
import AppButton from '../../Component/Share/AppButton';
import images from '../../common/images';

export default function SellPayDetailReport() {
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
        <RowItem label={'Customer:'} amount={'Maco Buntheon'} isFirst={true} />
        <RowItem label={'Mobile:'} amount={'010448054'} />
        <RowItem label={'Email:'} amount={'theombuntheoum@yahoo.com'} />
        <RowItem label={'Business:'} amount={'Easy Buy Easy Buy'} />
        <RowItem label={'Location:'} amount={'Siem Reap'} />
        <RowItem label={'Amount:'} amount={'$5.46'} />
        <RowItem label={'Payment Method:'} amount={'Cash'} />
        <RowItem label={'Payment Note:'} amount={'none'} />
        <RowItem label={'Reference No:'} amount={'SP2023/0001'} />
        <RowItem
          label={'Paid on:'}
          amount={'08/01/2023 08:16AM'}
          isLast={true}
        />
      </ScrollView>
    </Layout>
  );
}
