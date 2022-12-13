import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../theme';

const ErrorIndicator = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: sizes.fonts.titles,
          color: colors.mainText,
        }}
      >
        An error occurs, Try again later!
      </Text>
    </View>
  );
};

export default ErrorIndicator;
