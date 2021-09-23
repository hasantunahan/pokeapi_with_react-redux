import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './src/core/init/theme/apptheme';
import Navigation from './src/navigation/navigation';
import store from './src/redux/store/store';
import { changeTheme, themeColors } from './src/core/extension/color';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const scheme = useColorScheme();
  React.useEffect(() => {

  }, [])


  return (
    <Provider store={store}>
      <NavigationContainer
        theme={
          scheme === 'dark' ? changeTheme(darkTheme) : changeTheme(lightTheme)
        }>
          <StatusBar barStyle={scheme ==="dark" ? 'light-content' :'dark-content'} />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
