import React from 'react';
import { View, Text, StatusBar,SafeAreaView } from 'react-native';
import { themeColors } from '../../extension/color';
import { useTheme } from '@react-navigation/native';

const AppStatusBar = () =>{
    const scheme = useTheme()
    return (
        <View style={{height: StatusBar.currentHeight}}>
      <SafeAreaView style={{ backgroundColor: themeColors().card }} >
      <StatusBar barStyle={scheme == "dark" ? 'light-content' : 'dark-content'} backgroundColor={themeColors().card} translucent />   
      </SafeAreaView>
      </View>
    );
}
export default AppStatusBar;