import React from 'react';
import { View, Text } from 'react-native';
import { themeColors } from '../../extension/color';

export const AppText = ({ text, fontSize, textAlign }) => {
  return (
    <Text style={{ color: themeColors().text, fontSize: fontSize ?? 14, textAlign: textAlign ?? 'auto' }}>
      {text}
    </Text>
  );
};
