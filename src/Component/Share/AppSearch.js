import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Color} from '../../Constant';
import images from '../../common/images';
import Icon from 'react-native-vector-icons/Octicons';
import AppText from './AppText';

const AppSearch = ({marginTop = 15, onPress, marginBottom}) => {
  return (
    <View style={[styles.container, {marginTop, marginBottom}]}>
      <View style={styles.iconSide}>
        <Icon style={styles.seachIcon} name="search" />
      </View>
      <TextInput
        style={styles.inputContainer}
        placeholder="Search"
        placeholderTextColor={Color.LIGHT}
      />
      <View style={styles.filterSide}>
        <TouchableOpacity onPress={onPress} style={styles.filterButton}>
          <Image style={styles.filterIcon} source={images.FilterIcon()} />
          <AppText style={styles.filterLabel}>Filter</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: Color.SEARCHBACKGROUND,
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSide: {
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -7,
  },
  seachIcon: {
    fontSize: 22,
    color: Color.LIGHT,
  },
  inputContainer: {
    flex: 1,
    fontSize: 18,
  },
  filterSide: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 5,
  },
  filterButton: {
    paddingHorizontal: 10,
    height: 34,
    backgroundColor: Color.LIGHT,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 16,
    height: 18,
    resizeMode: 'stretch',
  },
  filterLabel: {
    fontSize: 16,
    color: Color.DARK,
    marginLeft: 5,
  },
});

export default AppSearch;
