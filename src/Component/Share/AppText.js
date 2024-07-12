import React from 'react';
import { Text } from 'react-native';

const AppText = (props) => {
  return <Text {...props} maxFontSizeMultiplier={1} allowFontScaling={false} />;
};

export default AppText;