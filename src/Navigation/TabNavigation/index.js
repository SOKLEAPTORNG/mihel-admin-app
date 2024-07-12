import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {Screen, Color} from '../../Constant';
import {HomeScreen, ProfileScreen, ReportScreen, Menu} from '../../Screen';
import images from '../../common/images';
import AppMenuBottomSheet from '../../Component/Share/AppMenuBottomSheet';
import AppAlert from '../../Component/Share/AppAlert';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.HOME_STACK}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.PROFILE_STACK}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.REPORT_STACK}
        component={ReportScreen}
        options={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: Color.LIGHT},
          headerTitleStyle: {
            color: Color.PRIMARY,
            fontWeight: 'bold',
            fontSize: 20,
          },
          title: 'Report',
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  const [isMenuSheetVisible, setIsMenuSheetVisible] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const handleMenuTabPress = () => {
    setIsMenuSheetVisible(true);
  };
  const handlePressLogout = () => {
    setShowLogoutAlert(true);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Color.SUCCESS,
          tabBarInactiveTintColor: Color.GRAY,
          tabBarStyle: {
            height: 60,
            paddingTop: 5,
            paddingBottom: 8,
            backgroundColor: Color.LIGHT,
            borderTopWidth: 0.5,
          },
        }}>
        <Tab.Screen
          name={Screen.HOME_TAB}
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => {
              const iconColor = focused ? Color.SUCCESS : Color.GRAY;
              return (
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'stretch',
                    tintColor: iconColor,
                  }}
                  source={images.HomeIcon()}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Screen.REPORT_TAB}
          component={ReportStack}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({focused}) => {
              const iconColor = focused ? Color.SUCCESS : Color.GRAY;
              return (
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'stretch',
                    tintColor: iconColor,
                  }}
                  source={images.ReportIcon()}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Screen.PROFILE_TAB}
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: function ({color, size, focused}) {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name={Screen.MENU_STACK}
          component={Menu}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({focused}) => {
              const iconColor = focused ? Color.SUCCESS : Color.GRAY;
              return (
                <Image
                  style={{
                    width: 22,
                    height: 20,
                    resizeMode: 'stretch',
                    tintColor: iconColor,
                  }}
                  source={images.MenuTabIcon()}
                />
              );
            },
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              handleMenuTabPress();
            },
          }}
        />
      </Tab.Navigator>

      {isMenuSheetVisible && (
        <AppMenuBottomSheet
          visible={isMenuSheetVisible}
          onPressLogout={handlePressLogout}
          onClose={() => setIsMenuSheetVisible(false)}
        />
      )}
      {showLogoutAlert && (
        <AppAlert
          IconSource={images.LogOutIcon()}
          description="Log Out from Seller App?"
          yesText="Yes"
          noText="No"
          onPressYes={() => setShowLogoutAlert(false)}
          onClose={() => setShowLogoutAlert(false)}
        />
      )}
    </>
  );
}
