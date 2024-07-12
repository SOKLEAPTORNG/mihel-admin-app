import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import AppSearch from '../../Component/Share/AppSearch';
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import AppButton from '../../Component/Share/AppButton';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../../src/Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import {useNavigation} from '@react-navigation/core';

export default function CustomerReport() {
  const navigation = useNavigation();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    customerGroup: {
      show: false,
      activeIndex: 0,
    },
    type: {
      show: false,
      activeIndex: 0,
    },
  });

  const handleShowBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const toggleDropdown = (type, index) => {
    setDropdowns(prevDropdowns => ({
      ...prevDropdowns,
      [type]: {
        show: !prevDropdowns[type].show,
        activeIndex: index !== null ? index : prevDropdowns[type].activeIndex,
      },
    }));
  };

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const RowItem = ({label, amount}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.defaultText}>{label}</AppText>
      <AppButton
        label={amount}
        backgroundColor={Color.PRIMARY}
        justifyContent={'center'}
        style={{color: Color.LIGHT}}
        padding={5}
        borderRadius={10}
        width={74}
      />
    </View>
  );

  const FixContentItem = ({label, amount}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.fixContentLabel}>{label}</AppText>
      <AppText style={styles.fixContentAmount}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT} paddingHorizontal={0}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <View style={styles.screen}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <AppSearch onPress={handleShowBottomSheet} />
              <AppText style={styles.custReportLabel}>Customer Report</AppText>
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
              <AppCard
                marginTop={15}
                isShowShadow={true}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('CustomerReportDetail')}>
                <AppText style={styles.appCardTitle}>General Customer</AppText>
                <RowItem label={'Total sales'} amount={'$ 22.55'} />
                <RowItem label={'Due'} amount={'$ 0.00'} />
              </AppCard>
              <AppCard
                marginTop={15}
                isShowShadow={true}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('CustomerReportDetail')}>
                <AppText style={styles.appCardTitle}>David</AppText>
                <RowItem label={'Total sales'} amount={'$ 22.55'} />
                <RowItem label={'Due'} amount={'$ 0.00'} />
              </AppCard>
              <AppCard
                marginTop={15}
                isShowShadow={true}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('CustomerReportDetail')}>
                <AppText style={styles.appCardTitle}>Sovannet</AppText>
                <RowItem label={'Total sales'} amount={'$ 22.55'} />
                <RowItem label={'Due'} amount={'$ 0.00'} />
              </AppCard>
              <AppCard
                marginTop={15}
                isShowShadow={true}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('CustomerReportDetail')}>
                <AppText style={styles.appCardTitle}>Jake</AppText>
                <RowItem label={'Total sales'} amount={'$ 22.55'} />
                <RowItem label={'Due'} amount={'$ 0.00'} />
              </AppCard>
              <AppCard
                marginTop={15}
                isShowShadow={true}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('CustomerReportDetail')}>
                <AppText style={styles.appCardTitle}>lucky</AppText>
                <RowItem label={'Total sales'} amount={'$ 22.55'} />
                <RowItem label={'Due'} amount={'$ 0.00'} />
              </AppCard>
            </ScrollView>
          </View>
          <View style={styles.fixContent}>
            <AppText style={styles.fixContentTitle}>Total</AppText>
            <FixContentItem label={'Total Purchase'} amount={'$ 22.55'} />
            <FixContentItem label={'Total Purchase Return'} amount={'$ 0.00'} />
            <FixContentItem label={'Total Sale'} amount={'$ 22.55'} />
            <FixContentItem label={'Total Sale Return'} amount={'$ 0.00'} />
            <FixContentItem
              label={'Total Opening Balance Due'}
              amount={'$ 0.00'}
            />
            <FixContentItem label={'Total Due'} amount={'$ 22.55'} />
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>
              Customer Group Name:
            </AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.customerGroup.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('customerGroup', null)}
              />
              {dropdowns.customerGroup.show && (
                <AdditionalDropdown
                  data={['All', 'VIP', 'Kuny']}
                  activeIndex={dropdowns.customerGroup.activeIndex}
                  onSelect={index => toggleDropdown('customerGroup', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Type:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                label={'All'}
                iconName={
                  dropdowns.type.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('type', null)}
              />
              {dropdowns.type.show && (
                <AdditionalDropdown
                  data={['All', 'Customer', 'Suppliers']}
                  activeIndex={dropdowns.type.activeIndex}
                  onSelect={index => toggleDropdown('type', index)}
                />
              )}
            </View>
            <AppLongButton
              title={'Search'}
              marginTop={70}
              marginBottom={40}
              onPress={handleCloseBottomSheet}
            />
          </AppBottomSheet>
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
