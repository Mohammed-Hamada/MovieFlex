import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ReactNativeSegmentedControlTab from 'react-native-segmented-control-tab';
import { colors } from '../theme';

const ControlTabs = ({ values, selectedIndex, onTabPress}) => {
  return (
    <ReactNativeSegmentedControlTab
      values={values}
      selectedIndex={selectedIndex}
      borderRadius={0}
      allowFontScaling
      onTabPress={onTabPress}
      tabStyle={styles.tab}
      tabTextStyle={styles.tabText}
      activeTabStyle={styles.activeTab}
    />
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.main,
    borderWidth: 0,
    paddingBottom: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
  tabText: {
    color: colors.mainText,
  },
  activeTab: {
    backgroundColor: colors.main,
    borderBottomWidth: 5,
    borderBottomColor: colors.searchBarBackground,
  },
});

export default ControlTabs;
