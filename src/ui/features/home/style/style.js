import React from 'react';
import {StyleSheet} from 'react-native';
import { useTheme } from 'react-navigation';
import { themeColors } from '../../../../core/extension/color';
const style = props =>
  StyleSheet.create({
    main: { flex: 1, backgroundColor: themeColors().background },
  });
function homeStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default homeStyle;
