import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import AppSearch from '../../Component/Share/AppSearch';
import {Color} from '../../Constant';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../../src/Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AppSelectDateButton from '../../Component/Share/AppSelectDateButton';
import {BarChart} from 'react-native-gifted-charts';

export default function ExpenseReport() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    locationDropdown: {
      show: false,
      activeIndex: 0,
    },
    categoryDropdown: {
      show: false,
      activeIndex: 0,
    },
  });

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

  const handleShowBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const barData = [
    {
      value: 12,
      label: 'Soup',
      labelTextStyle: {color: Color.DARK, fontSize: 12},
      frontColor: '#6199E9',
    },
  ];

  const TableRow = ({label, amount}) => {
    return (
      <View style={styles.tableRow}>
        <AppText style={styles.label}>{label}</AppText>
        <AppText style={styles.defaultText}>{amount}</AppText>
      </View>
    );
  };

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <AppSearch onPress={handleShowBottomSheet} />
          <View style={styles.row}>
            <Image style={styles.saleIcon} source={images.SaleIcon()} />
            <AppText style={styles.trendingLabel}>Trending Product</AppText>
          </View>
          <View style={styles.rowDiagramItem}>
            <AppText style={styles.defaultText}>-Values</AppText>
            <TouchableOpacity>
              <SimpleLineIcons style={styles.menuIcon} name="menu" />
            </TouchableOpacity>
          </View>
          <View style={styles.graphContent}>
            <BarChart
              data={barData}
              barWidth={7}
              roundedTop
              roundedBottom
              hideRules
              xAxisThickness={0}
              yAxisThickness={0}
              yAxisTextStyle={{color: Color.DARK, fontSize: 14}}
              noOfSections={6}
              maxValue={12}
            />
          </View>
          <View style={styles.table}>
            <View style={styles.thRowHeader}>
              <View style={[styles.thContainer, {borderTopLeftRadius: 10}]}>
                <AppText style={styles.defaultText}>Expense Categories</AppText>
              </View>
              <View style={[styles.thContainer, {borderTopRightRadius: 10}]}>
                <AppText style={styles.defaultText}>Total Expense</AppText>
              </View>
            </View>
            <TableRow label={'Soup'} amount={'$10.00'} />
            <TableRow label={'Total:'} amount={'$10.00'} />
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>
              Business Location:
            </AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All Location'}
                iconName={
                  dropdowns.locationDropdown.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('locationDropdown', null)}
              />
              {dropdowns.locationDropdown.show && (
                <AdditionalDropdown
                  data={[
                    'All locations',
                    'Mihel Seoul - 01 (BL 0001)',
                    'Mihel Seoul - 02 (098765)',
                  ]}
                  activeIndex={dropdowns.locationDropdown.activeIndex}
                  onSelect={index => toggleDropdown('locationDropdown', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Category:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.categoryDropdown.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('categoryDropdown', null)}
              />
              {dropdowns.categoryDropdown.show && (
                <AdditionalDropdown
                  data={['All', 'Soup']}
                  activeIndex={dropdowns.categoryDropdown.activeIndex}
                  onSelect={index => toggleDropdown('categoryDropdown', index)}
                />
              )}
            </View>
            <View style={styles.rowContent}>
              <View style={styles.divider}>
                <AppText style={styles.bottomSheetLabel}>From:</AppText>
                <AppSelectDateButton
                  imageSource={images.DateIcon()}
                  label={'Select Date'}
                />
              </View>
              <View style={styles.divider}>
                <AppText style={styles.bottomSheetLabel}>To:</AppText>
                <AppSelectDateButton
                  imageSource={images.DateIcon()}
                  label={'Select Date'}
                />
              </View>
            </View>
            <AppLongButton
              marginTop={20}
              marginBottom={15}
              title={'Search'}
              onPress={handleCloseBottomSheet}
            />
          </AppBottomSheet>
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
