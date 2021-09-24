import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-navigation';
import {themeColors} from '../../../../../core/extension/color';

const style = props =>
  StyleSheet.create({
    main: {flex: 1, paddingHorizontal: 10},
    row_withMargin: {
      flexDirection: 'row',
      width: '100%',
      marginVertical:5,
    },
    title_screen: {
      fontWeight: '700',
      color: themeColors().text,
      fontSize: 18,
    },
    image_back:{
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 50,
        marginRight: 5,
      },
      row:{
          flexDirection:'row'
      },
      row_space_between:{
          flexDirection:'row',
          justifyContent :'space-between',
          alignItems:'center'
      }
  });
function favoritePokeStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default favoritePokeStyle;
