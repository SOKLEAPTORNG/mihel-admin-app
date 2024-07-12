import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {Color} from '../../Constant';
import {Layout} from '../../Component';
import AppCustomHeader from '../../Component/Share/AppCustomHeader';
import images from '../../common/images';
import AppText from '../../Component/Share/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import {BarChart} from 'react-native-gifted-charts';

export default function Home() {
  const navigation = useNavigation();
  const [showAdditionalDropdown, setShowAdditionalDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    date: {
      show: false,
      activeIndex: 0,
    },
  });

  // following Prototype
  // useEffect(() => {
  //   navigation.navigate('AppGraph');
  // });

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

  const toggleAdditionalDropdown = index => {
    setShowAdditionalDropdown(!showAdditionalDropdown);
    setActiveIndex(index);
  };

  const isLastIndex = index => {
    return index === 2;
  };

  const barData = [
    {
      value: 2000,
      label: 'Jan',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 400, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Feb',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Mar',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Apr',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'May',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Jun',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Jul',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Aug',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Sep',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Oct',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Nov',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
    {
      value: 0,
      label: 'Dec',
      spacing: 1,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', fontSize: 12},
      frontColor: '#6199E9',
    },
    {value: 0, frontColor: '#EE726E'},
  ];

  const DashboardItem = ({backgroundColor, amount, label}) => {
    return (
      <View style={[styles.dashboardContainer, {backgroundColor}]}>
        <View style={styles.absoluteDashboard} />
        <AppText style={styles.dashboardAmountData}>{amount}</AppText>
        <AppText style={styles.dashboardLabelData}>{label}</AppText>
      </View>
    );
  };

  return (
    <Layout paddingHorizontal={0}>
      <AppCustomHeader flexDirection={'row'}>
        <Image style={styles.logo} source={images.AppLogo()} />
        <AppText style={styles.appNameLabel}>CTL79 Seller</AppText>
        <TouchableOpacity
          style={[
            styles.dropdownContainer,
            {
              borderRadius: showAdditionalDropdown ? 0 : 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          ]}
          onPress={() => setShowAdditionalDropdown(!showAdditionalDropdown)}>
          <AppText style={styles.dropdownLabel}>Select locations</AppText>
          <Icon
            style={styles.downIcon}
            name={
              showAdditionalDropdown ? 'caret-up-sharp' : 'caret-down-sharp'
            }
          />
        </TouchableOpacity>

        {showAdditionalDropdown && (
          <TouchableOpacity style={styles.addtionalDropdown}>
            {[0, 1, 2].map(index => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.additonalContainer,
                  {
                    backgroundColor:
                      activeIndex === index ? Color.PRIMARY : 'transparent',
                    borderBottomLeftRadius: isLastIndex(index) ? 10 : 0,
                    borderBottomRightRadius: isLastIndex(index) ? 10 : 0,
                  },
                ]}
                onPress={() => toggleAdditionalDropdown(index)}>
                <AppText
                  style={[
                    styles.addtionalLabel,
                    {color: activeIndex === index ? Color.LIGHT : Color.DARK},
                  ]}>
                  {index === 0
                    ? 'All location'
                    : index === 1
                    ? 'Mihel Seoul - 01'
                    : 'Mihel Seoul - 02'}
                </AppText>
              </TouchableOpacity>
            ))}
          </TouchableOpacity>
        )}
      </AppCustomHeader>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.dashboardScreen}>
          <View style={styles.rowContainer}>
            <AppText style={styles.overviewLabel}>Overview</AppText>
            <TouchableOpacity
              style={styles.filterContainer}
              onPress={handleShowBottomSheet}>
              <Image style={styles.filterIcon} source={images.FilterIcon()} />
              <AppText style={styles.filterLabel}>Filter</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.rowdashboardContainer}>
            <DashboardItem
              backgroundColor={'#679800'}
              amount={3}
              label={'total order'}
            />
            <DashboardItem
              backgroundColor={'#3982c9'}
              amount={'$22.55'}
              label={'total sales'}
            />
          </View>
          <View style={styles.rowdashboardContainer}>
            <DashboardItem
              backgroundColor={'#2b58be'}
              amount={'$0.00'}
              label={'invoice paid'}
            />
            <DashboardItem
              backgroundColor={'#ed726e'}
              amount={'$0.00'}
              label={'invoice due'}
            />
          </View>
          <View style={styles.rowdashboardContainer}>
            <DashboardItem
              backgroundColor={'#f55215'}
              amount={'$0.00'}
              label={'purchase due'}
            />
            <DashboardItem
              backgroundColor={'#f9a220'}
              amount={'$0.00'}
              label={'expense'}
            />
          </View>
        </View>
        <View style={styles.graphScreen}>
          <View style={styles.row}>
            <Image style={styles.saleIcon} source={images.SaleIcon()} />
            <AppText style={styles.boldText}>Sale</AppText>
          </View>
          <View style={styles.rowGraphItem}>
            <AppText style={styles.boldText}>-All Location</AppText>
            <TouchableOpacity>
              <SimpleLineIcons style={styles.menuIcon} name="menu" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.graphContent}>
          <BarChart
            data={barData}
            barWidth={5}
            spacing={14}
            roundedTop
            roundedBottom
            xAxisThickness={0}
            yAxisThickness={0}
            yAxisTextStyle={{color: Color.DARK, fontSize: 14}}
            noOfSections={4}
            maxValue={2000}
          />
        </View>
        <AppBottomSheet
          title={'Filters'}
          visible={isBottomSheetVisible}
          closeModal={() => setIsBottomSheetVisible(false)}>
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
                data={['Today', 'Yesterday', 'Last 7 Days', '1 month']}
                activeIndex={dropdowns.date.activeIndex}
                onSelect={index => toggleDropdown('date', index)}
                onCloseBottomSheet={handleCloseBottomSheet}
              />
            )}
          </View>
        </AppBottomSheet>
      </ScrollView>
    </Layout>
  );
}
