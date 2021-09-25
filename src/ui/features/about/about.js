import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import WebView from 'react-native-webview';
import BaseView from '../../../core/base/baseview';
import {themeColors} from '../../../core/extension/color';
import {config} from '../../../core/init/config/config';
import aboutStyle from './style/style';
const AboutPokemon = () => {
  const styles = aboutStyle();
  const scheme = useColorScheme();
  return (
    <BaseView
      st_color={themeColors().card}
      content={scheme === 'dark' ? 'light-content' : 'dark-content'}
      view={
        <View style={styles.main}>
          <WebView
            source={{
              uri: config.ABOUT_URL,
            }}
          />
        </View>
      }
    />
  );
};
export default AboutPokemon;
