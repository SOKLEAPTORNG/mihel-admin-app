import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigation from '../StackNavigation';
import {Screen} from '../../Constant';
import {DrawerContent} from '../../Component';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={Screen.MENU} component={StackNavigation} />
    </Drawer.Navigator>
  );
}
