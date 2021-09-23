import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {themeColors} from '../../extension/color';

const AppStatusBar = ({st_color, content}) => {
  return (
    <View style={{height: StatusBar.currentHeight}}>
      <SafeAreaView style={{backgroundColor: themeColors().card}}>
        <StatusBar barStyle={content} backgroundColor={st_color} translucent />
      </SafeAreaView>
    </View>
  );
};
export default AppStatusBar;
