import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-navigation';
import {themeColors} from '../../../../core/extension/color';

const style = props =>
  StyleSheet.create({
    main: {flex: 1},
    row_withMargin: {
      flexDirection: 'row',
      width: '100%',
      marginVertical: 5,
      paddingHorizontal: 10
    },
    title_screen: {
      fontWeight: '700',
      color: themeColors().text,
      fontSize: 18,
    },
    row: {
      flexDirection: 'row',
    },
  });
function aboutStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default aboutStyle;
