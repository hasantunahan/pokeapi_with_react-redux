import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-navigation';
import {themeColors} from '../../../../core/extension/color';
const style = props =>
  StyleSheet.create({
    main: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    scrool_flex :{
      flex:1
    }
  });
function pokeDetailsStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default pokeDetailsStyle;
