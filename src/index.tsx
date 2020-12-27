import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => {
  return (
    <View style={{ backgroundColor: '#32323E', flex: 1 }}>
      <AppContainer>
        <StatusBar barStyle="light-content" backgroundColor="#32323E" />
        <Routes />
      </AppContainer>
    </View>
  );
};

export default App;
