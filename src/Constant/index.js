import normalize from 'react-native-normalize';

export class Font {
  static SMALL = normalize(8);
  static DEFAULT = normalize(16);
  static NORMAL = normalize(24);
  static LARGE = normalize(32);
  static XLARGE = normalize(40);
  static XXLARGE = normalize(48);
  static XXXLARGE = normalize(56);
  static EXTRA_LARGE = normalize(64);
}

export class Dimension {
  static width = width => normalize(width, 'width');
  static height = height => normalize(height, 'height');
}

export class Screen {
  static HOME = 'HOME';
  static HOME_STACK = 'HOME_STACK';
  static HOME_TAB = 'HOME_TAB';
  static PROFILE_STACK = 'PROFILE_STACK';
  static PROFILE_TAB = 'PROFILE_TAB';
  static MENU = 'MENU';
  static LOGIN = 'LOGIN';
  static REPORT_STACK = 'REPORT_STACK';
  static REPORT_TAB = 'REPORT_TAB';
  static MENU_STACK = 'MENU_STACK';
}

export class Color {
  static LIGHT = '#FFF';
  static GREY = 'rgba(255, 255, 255, 0.1)';
  static DARK = '#000';
  static TRANSPARENT = 'transparent';
  static PRIMARY = '#3D7DE5';
  static MODAL_BACKGROUND = 'rgba(0, 0, 0, 0.5)';
  static LOADING_BACKGROUND = 'rgba(0, 0, 0, 0.8)';
  static REGISTER_APPBACKGROUND = '#f8f9fa';
  static PLACEHOLDER = '#979797';
  static GRAY = '#979797';
  static APPBACKGROUND = '#F1F2F3';
  static DANGER = '#E00202';
  static SUCCESS = '#649911';
  static HEADERBACKARROW = '#393C47';
  static STROKE = '#DDDDDD';
  static SILVER = '#E2E2E9';
  static SEARCHBACKGROUND = '#9EBDF1';
  static APPBUTTON = '#A3E9C9';
  static DARKSUCCESS = '#229865';
  static SKY = '#4F98C3';
  static LIGHTSILVER = '#F1F1F4';
  static DARKGRAY = '#D9D9D9';
}

export class LoadingType {
  static LOADING_ACTIVE = 'LOADING_ACTIVE';
  static LOADING_INACTIVE = 'LOADING_INACTIVE';
}

export class UserType {
  static SET_USER = 'SET_USER';
  static USER_LOGOUT = 'USER_LOGOUT';
}

export const GOOGLE_WEB_CLIENT =
  '647928878961-l54ehtmmad4gr7r3o7vfrb1a4kcjhis0.apps.googleusercontent.com';
