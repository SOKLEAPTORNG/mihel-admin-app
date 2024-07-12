import React, {useCallback, useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
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

export default function PurchaseAndSell() {
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

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <AppSearch onPress={handleShowBottomSheet} />
          <AppCard marginTop={15}>
            <AppText style={styles.titleLabel}>Purchases</AppText>
            <RowItem label={'Total Purchase:'} amount={'$ 5.00'} />
            <RowItem label={'Purchase including tax:'} amount={'$ 5.50'} />
            <RowItem
              label={'Total Purchase Return Including Tax:'}
              amount={'$ 0.00'}
            />
            <RowItem label={'Purchase Due:'} amount={'$ 0.00'} />
          </AppCard>

          <AppCard marginTop={15}>
            <AppText style={styles.titleLabel}>Sales</AppText>
            <RowItem label={'Total Sale:'} amount={'$ 5.00'} />
            <RowItem label={'Sale including tax:'} amount={'$ 5.50'} />
            <RowItem
              label={'Total Sell Return Including Tax:'}
              amount={'$ 0.00'}
            />
            <RowItem label={'Sale Due:'} amount={'$ 0.00'} />
          </AppCard>

          <AppCard marginTop={15}>
            <AppText style={styles.titleLabel}>Overall</AppText>
            <RowItem label={'Sale - Purchase:'} amount={'$ 5.00'} />
            <RowItem label={'Due Amount:'} amount={'$ 0.00'} />
          </AppCard>

          <AppButton
            marginTop={25}
            backgroundColor={Color.SUCCESS}
            label={'Print'}
            alignSelf="flex-end"
            iconSource={images.PrintIcon()}
            style={{color: Color.LIGHT, fontSize: 16, marginLeft: 5}}
            imageStyle={{
              width: 14.5,
              height: 15,
              resizeMode: 'stretch',
              tintColor: Color.LIGHT,
            }}
          />
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>Location:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All locations'}
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
                    'All location',
                    'Mihel Seoul - 01',
                    'Mihel Seoul - 02',
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
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
