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
import {Color} from '../../Constant';
import AppButton from '../../Component/Share/AppButton';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../../src/Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import AppCard from '../../Component/Share/AppCard';

export default function StockAdjustReport() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    location: {
      show: false,
      activeIndex: 0,
    },
    date: {
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
      <AppText style={styles.defaultText}>{amount}</AppText>
    </View>
  );

  const RowContent = ({
    label,
    amount,
    isFirst = false,
    isLast = false,
    style,
  }) => (
    <View
      style={[
        styles.rowContent,
        {
          borderTopLeftRadius: isFirst ? 10 : 0,
          borderTopRightRadius: isFirst ? 10 : 0,
          borderBottomLeftRadius: isLast ? 10 : 0,
          borderBottomRightRadius: isLast ? 10 : 0,
          marginBottom: isLast ? 15 : 0,
        },
      ]}>
      <AppText style={styles.contentLabel}>{label}</AppText>
      <AppText style={styles.contentAmount}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <AppSearch onPress={handleShowBottomSheet} />

          <AppCard marginTop={15} padding={15} paddingTop={5}>
            <RowItem label={'Total Normal:'} amount={'$ 60.00'} />
            <RowItem label={'Total Abnormal:'} amount={'$ 0.00'} />
            <RowItem label={'Total Stock Adjustment:'} amount={'$ 0.00'} />
            <RowItem label={'Purchase Due:'} amount={'$ 60.00'} />
          </AppCard>

          <AppCard marginTop={15} paddingTop={5}>
            <RowItem label={'Total Amount Recoverd:'} amount={'$ 0.00'} />
          </AppCard>

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
          <View style={styles.rowContentContainer}>
            <RowContent
              label={'Date:'}
              amount={'29/29/2023 03:51 '}
              isFirst={true}
            />
            <RowContent label={'Refereance No:'} amount={'SA2020/0001'} />
            <RowContent label={'Locations:'} amount={'Mihel Seoul - 01'} />
            <RowContent label={'Adjustments Type:'} amount={'Abnormal'} />
            <RowContent label={'Total Amount:'} amount={'$ 50.00'} />
            <RowContent label={'Total Amount Recovered :'} amount={'$0.00'} />
            <RowContent label={'Reason:'} amount={'Test'} />
            <RowContent
              label={'Added By:'}
              amount={'Mr Easy Buy'}
              isLast={true}
            />
          </View>

          <View style={styles.rowContentContainer}>
            <RowContent
              label={'Date:'}
              amount={'29/29/2023 03:50 '}
              isFirst={true}
            />
            <RowContent label={'Refereance No:'} amount={'SA2020/0002'} />
            <RowContent label={'Locations:'} amount={'Mihel Seoul - 01'} />
            <RowContent label={'Adjustments Type:'} amount={'Normal'} />
            <RowContent label={'Total Amount:'} amount={'$ 0.00'} />
            <RowContent label={'Total Amount Recovered :'} amount={'$10.00'} />
            <RowContent label={'Reason:'} amount={'Mr Jack'} />
            <RowContent
              label={'Added By:'}
              amount={'Mr Easy Buy'}
              isLast={true}
            />
          </View>

          <View style={styles.rowContentContainer}>
            <RowContent
              label={'Date:'}
              amount={'29/29/2023 03:00 '}
              isFirst={true}
            />
            <RowContent label={'Refereance No:'} amount={'SA2020/0003'} />
            <RowContent label={'Locations:'} amount={'Mihel Seoul - 01'} />
            <RowContent label={'Adjustments Type:'} amount={'Normal'} />
            <RowContent label={'Total Amount:'} amount={'$ 50.00'} />
            <RowContent label={'Total Amount Recovered :'} amount={'$10.00'} />
            <RowContent label={'Reason:'} amount={'Test'} />
            <RowContent label={'Added By:'} amount={'Mr Rose'} isLast={true} />
          </View>

          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>Location:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All Locations'}
                iconName={
                  dropdowns.location.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('location', null)}
              />
              {dropdowns.location.show && (
                <AdditionalDropdown
                  data={[
                    'All Location',
                    'Mihel Seooul - 01',
                    'Mihel Seooul - 02',
                  ]}
                  activeIndex={dropdowns.location.activeIndex}
                  onSelect={index => toggleDropdown('location', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Date:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                label={'Filter By Date'}
                iconName={
                  dropdowns.date.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('date', null)}
              />
              {dropdowns.date.show && (
                <AdditionalDropdown
                  data={['Today', 'Yesterday', 'Last 7 Days']}
                  activeIndex={dropdowns.date.activeIndex}
                  onSelect={index => toggleDropdown('date', index)}
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
