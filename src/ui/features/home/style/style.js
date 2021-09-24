import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-navigation';
import {themeColors} from '../../../../core/extension/color';
const style = props =>
  StyleSheet.create({
    main: {flex: 1, backgroundColor: themeColors().background},
    searchSection: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColors().background,
      borderWidth: 1.2,
      borderColor: themeColors().border,
    },
    searchIcon: {
      padding: 10,
    },
    input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: themeColors().background,
      color: themeColors().text,
    },
    row:{
      flexDirection:'row'
    }
  });
function homeStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default homeStyle;
