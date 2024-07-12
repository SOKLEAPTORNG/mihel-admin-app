import React, {useCallback, useMemo} from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {styles} from './styles';
import DrawerMenu from '../DrawerMenu';
import {drawerMenus} from '../../Data';
import DrawerLogo from '../DrawerLogo';
import DrawerMenuItem from '../DrawerMenuItem';
import {Color, Font, Screen} from '../../Constant';
import {useUser} from '../../Hook';
import {UserActions} from '../../Store/Action';

export default function DrawerContent({navigation}) {
  const user = useUser();
  const dispatch = useDispatch();
  const handleLogout = useCallback(
    function () {
      dispatch(UserActions.userLogout());
      navigation.toggleDrawer();
    },
    [dispatch, navigation],
  );

  const renderLoginLogout = useMemo(
    function () {
      return user ? (
        <DrawerMenuItem
          title="Logout"
          icon={
            <AntDesign name="user" size={Font.NORMAL} color={Color.LIGHT} />
          }
          onAction={handleLogout}
        />
      ) : (
        <DrawerMenuItem
          title="Login"
          icon={
            <AntDesign name="user" size={Font.NORMAL} color={Color.LIGHT} />
          }
          screen={Screen.LOGIN}
        />
      );
    },
    [user, handleLogout],
  );

  return (
    <View style={styles.container}>
      <DrawerLogo />
      <DrawerMenu data={drawerMenus} />
      {renderLoginLogout}
    </View>
  );
}
