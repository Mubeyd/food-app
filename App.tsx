import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Providers from './src/navigation/Provider';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Providers />
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
