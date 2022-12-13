import { ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from '../theme';

const LoadingIndicator = () => {
  return (
    <ActivityIndicator
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      size="large"
      color={colors.activeTab}
    />
  );
};

export default LoadingIndicator;

