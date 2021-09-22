import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {darkTheme, lightTheme} from './src/core/init/theme/apptheme';
import Navigation from './src/navigation/navigation';
import store from './src/redux/store/store';
import {changeTheme, themeColors} from './src/core/extension/color';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const scheme = useColorScheme();
  React.useEffect(()=>{

  },[])

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={
          scheme === 'dark' ? changeTheme(darkTheme) : changeTheme(lightTheme)
        }>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={
              scheme === 'dark'
                ? themeColors().background
                : themeColors().background
            }
          />
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
