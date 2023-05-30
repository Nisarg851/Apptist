import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'none'
  },
};

export default Loader;
