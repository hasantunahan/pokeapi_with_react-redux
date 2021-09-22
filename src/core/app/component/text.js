import React from 'react';
import {View, Text} from 'react-native';
import {themeColors} from '../../extension/color';

export const AppText = ({text, fontSize}) => {
  return (
    <Text style={{color: themeColors().text, fontSize: fontSize ?? 14}}>
      {text}
    </Text>
  );
};
