import React from 'react';
import {StyleSheet} from 'react-native';
import { useTheme } from 'react-navigation';
import { themeColors } from '../../../../core/extension/color';
const style = props =>
  StyleSheet.create({
    main: {
      backgroundColor: themeColors().background,
      flex: 1,
      alignItems :'center',
      justifyContent :'center'
    },
  });
function splashStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default splashStyle;
