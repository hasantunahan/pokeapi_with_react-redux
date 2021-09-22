import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { useTheme } from 'react-navigation';
import { themeColors } from '../../../../core/extension/color';
const style = props =>
  StyleSheet.create({
    main: {
      height: Platform.OS == "ios" ? 44 : 56,
      width: '100%',
      backgroundColor: themeColors().card
    },
    row :{
      flexDirection :'row',
      height: '100%',
      alignItems :'center',
      justifyContent :'center',
      paddingHorizontal :10
    }
  });
function headerStyle() {
  const { colors } = useTheme();
  const styles = React.useMemo(() => style({ colors }), [colors]);
  return styles;
}
export default headerStyle;
