import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/lib/integration/react';

import RootNavigator from '_navigations';

import { store, persistor } from '_redux/configStore';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
