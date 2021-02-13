import 'react-native-gesture-handler';
import React from 'react';
import '_localization/i18j';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { PersistGate } from 'redux-persist/lib/integration/react';

import RootScreen from '_screens/RootScreen';
import { store, persistor } from '_redux/configStore';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <RootScreen />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
