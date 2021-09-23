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
    row: {
      flexDirection: 'row',
    },
    margin_5: {
      margin: 5,
    },
    text_color_white: {
      color: 'white',
      fontWeight:'700'
    },
    type: {
      alignItems: 'center',
      padding: 3,
      marginRight: 2,
      borderRadius: 5,
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    type_text: {fontSize: 12, color: 'white'},
    image_back:{
      alignSelf: 'center',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: 50,
      marginRight: 5,
    }
  });
function pokeCardStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default pokeCardStyle;
