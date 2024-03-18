import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {commonStyles} from './styles';

const Loader: React.FC = () => {
  return (
    <View style={commonStyles.loadingContainer}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default Loader;
