import AntDesign from 'react-native-vector-icons/AntDesign';

import {DrawerMenu} from '../../Model';
import {Color, Font, Screen} from '../../Constant';

export const drawerMenus = [
  new DrawerMenu(
    1,
    'Home',
    <AntDesign name="home" size={Font.NORMAL} color={Color.LIGHT} />,
    Screen.HOME,
  ),
];
