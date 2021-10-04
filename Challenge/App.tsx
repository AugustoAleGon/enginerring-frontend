import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppContainer from './navigation/AppContainer';
import {fetchIcons} from './utils';

const App = () => {
  useEffect(() => {
    fetchIcons();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
