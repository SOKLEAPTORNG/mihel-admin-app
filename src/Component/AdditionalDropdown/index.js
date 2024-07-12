import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import AppText from '../../../src/Component/Share/AppText';
import {Color} from '../../Constant';

const AdditionalDropdown = ({
  data,
  activeIndex,
  onSelect,
  // onCloseBottomSheet
}) => (
  <View style={styles.addtionalDropdown}>
    {data.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.additonalContainer,
          {
            backgroundColor:
              activeIndex === index ? Color.PRIMARY : 'transparent',
            borderBottomLeftRadius: index === data.length - 1 ? 10 : 0,
            borderBottomRightRadius: index === data.length - 1 ? 10 : 0,
            borderTopLeftRadius: index === 0 ? 10 : 0,
            borderTopRightRadius: index === 0 ? 10 : 0,
          },
        ]}
        onPress={() => {
          onSelect(index);
          // onCloseBottomSheet();
        }}>
        <AppText
          style={[
            styles.addtionalLabel,
            {
              color: activeIndex === index ? Color.LIGHT : Color.DARK,
            },
          ]}>
          {item}
        </AppText>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  addtionalDropdown: {
    height: 'auto',
    width: 140,
    position: 'absolute',
    zIndex: 999,
    right: 0,
    top: 46,
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    backgroundColor: Color.LIGHT,
    borderRadius: 10,
  },
  additonalContainer: {
    height: 39,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderColor: Color.STROKE,
  },
  addtionalLabel: {
    fontSize: 12,
    color: Color.LIGHT,
  },
});

export default AdditionalDropdown;
