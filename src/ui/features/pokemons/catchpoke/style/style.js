import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-navigation';
import {themeColors} from '../../../../../core/extension/color';

const style = props =>
  StyleSheet.create({
    main: {
      backgroundColor: themeColors().card,
      borderRadius: 100,
      marginRight: 5,
      height: 108,
      width: 108,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    top_info: {
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    experience: {
      height: 25,
      width: 25,
      marginLeft: -3,
      borderRadius: 50,
      backgroundColor: 'white',
      marginTop: -3,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    release_poke: {
      height: 25,
      width: 25,
      borderRadius: 50,
      backgroundColor: 'white',
      marginTop: -3,
      marginRight: -3,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    experience_text: {fontWeight: '700', fontSize: 11},
    main_back: {flex: 1, paddingHorizontal: 5},
    row_withMargin: {flexDirection: 'row', width: '100%', marginTop: 5},
    title_screen:{
        fontWeight: '700',
        color: themeColors().text,
        fontSize: 18,
      }
  });
function myPokemonStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => style({colors}), [colors]);
  return styles;
}
export default myPokemonStyle;
