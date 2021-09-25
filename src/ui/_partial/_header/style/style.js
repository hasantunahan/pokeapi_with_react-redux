import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {useTheme} from 'react-navigation';
const style = props =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
      paddingHorizontal: 5,
      justifyContent: 'space-between',
    },
    row_center :{
      flexDirection:'row',
      alignItems:'center'
    }
  });
function headerStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default headerStyle;
