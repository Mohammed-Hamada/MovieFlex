import { StyleSheet, TextInput, View } from 'react-native';
import React, { useEffect } from 'react';
import { Search } from '../../assets/svg';
import { colors, sizes } from '../theme';

const SearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearchTermSubmit,
  onFocus,
  ref,
}) => {
  return (
    <View style={styles.view}>
      <TextInput
        value={searchTerm}
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor={colors.mainText}
        placeholderTextColor={colors.secondText}
        placeholder="Search"
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
        onFocus={onFocus}
        ref={ref}
      />
      <Search style={styles.searchIcon} color={colors.secondText} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.mainText,
    backgroundColor: colors.searchBarBackground,
    height: 50,
    borderRadius: sizes.mainRadius,
    marginHorizontal: sizes.mainMarginHorizontal,
    paddingHorizontal: 20,
    marginVertical: sizes.mainMarginVertical,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    color: colors.mainText,
    fontSize: sizes.fonts.subTitles,
  },
});

export default SearchBar;
