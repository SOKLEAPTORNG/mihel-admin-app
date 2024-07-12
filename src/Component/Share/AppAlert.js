import React from 'react';
import {Modal, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import AppText from './AppText';
import {Color} from '../../Constant';

const AppAlert = ({
  visible,
  onClose,
  onPressYes,
  IconSource,
  description,
  yesText,
  noText,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="pop"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {IconSource && (
            <Image style={styles.logoutIcon} source={IconSource} />
          )}
          <AppText style={styles.description}>{description}</AppText>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPressYes} style={styles.yesButton}>
              <AppText style={styles.yesText}>{yesText}</AppText>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.noButton}>
              <AppText style={styles.noText}>{noText}</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Color.LIGHT,
    paddingVertical: 20,
    borderRadius: 10,
    width: '85%',
  },
  logoutIcon: {
    width: 43,
    height: 48,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  yesButton: {
    height: 45,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.SUCCESS,
    borderRadius: 9,
    marginRight: 20,
  },
  yesText: {
    fontSize: 15,
    color: Color.LIGHT,
  },
  noButton: {
    height: 45,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.SILVER,
    borderRadius: 9,
  },
  noText: {
    fontSize: 15,
    color: Color.DARK,
  },
});

export default AppAlert;
