import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Animated,
  Image,
} from 'react-native';
import {Color} from '../../Constant';
import Icon from 'react-native-vector-icons/Octicons';
import images from '../../common/images';
import AppText from './AppText';
import {useNavigation} from '@react-navigation/core';

const MenuItem = ({iconSource, label, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.eachButtonContainer}>
    <Image style={styles.eachButtonIcon} source={iconSource} />
    <AppText style={styles.eachButtonLabel}>{label}</AppText>
  </TouchableOpacity>
);

const AppMenuBottomSheet = ({visible, onPressLogout, onClose}) => {
  const navigation = useNavigation();
  const animatedValue = useState(new Animated.Value(0))[0];

  const toggleModal = () => {
    Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const modalAnimatedStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
        <Animated.View style={[styles.bottomSheet, modalAnimatedStyle]}>
          <View style={styles.screen}>
            <TouchableOpacity
              style={styles.downIconContainer}
              onPress={onClose}>
              <Icon style={styles.downIcon} name="chevron-down" />
            </TouchableOpacity>
            <View style={styles.rowContent}>
              <MenuItem
                onPress={() => navigation.navigate('SettingScreen')}
                iconSource={images.SettingIcon()}
                label="Setting"
              />
              <MenuItem
                onPress={() => navigation.navigate('TermConditionScreen')}
                iconSource={images.TermIcon()}
                label="Terms & Condition"
              />
              <MenuItem
                onPress={() => navigation.navigate('AboutUsScreen')}
                iconSource={images.People()}
                label="About Us"
              />
              <MenuItem
                onPress={() => navigation.navigate('PolicyScreen')}
                iconSource={images.PrivacyLock()}
                label="Privacy Policy"
              />
              <MenuItem
                onPress={onPressLogout}
                iconSource={images.LogOutIcon()}
                label="Log Out"
              />
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Color.LIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  screen: {
    height: 330,
    width: '100%',
    backgroundColor: Color.APPBACKGROUND,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  downIconContainer: {
    width: 60,
    height: 35,
    alignItems: 'center',
    paddingTop: 3,
  },
  downIcon: {
    fontSize: 22,
    color: Color.GRAY,
  },
  rowContent: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  eachButtonContainer: {
    width: 86,
    height: 86,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.LIGHT,
    margin: 5,
  },
  eachButtonIcon: {
    width: 28,
    height: 28,
    resizeMode: 'stretch',
    marginBottom: 2,
  },
  eachButtonLabel: {
    fontSize: 12,
    color: Color.DARK,
    textAlign: 'center',
  },
});

export default AppMenuBottomSheet;
