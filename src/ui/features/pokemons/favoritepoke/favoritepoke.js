import React from 'react';
import {View, Text, useColorScheme, Dimensions} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {connect, useDispatch} from 'react-redux';

import BaseView from '../../../../core/base/baseview';
import {themeColors} from '../../../../core/extension/color';
import {removeFavorite} from '../../../../redux/actions/pokemon/pokeaction';
import favoritePokeStyle from './style/style';
import Favoritepokecard from './_component/favoritepokecard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoritePokemon = props => {
  const scheme = useColorScheme();
  const styles = favoritePokeStyle();
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    setPokemons(props.favoriteList);
  }, [props.favoriteList]);

  return (
    <BaseView
      st_color={themeColors().card}
      content={scheme === 'dark' ? 'light-content' : 'dark-content'}
      view={
        <View style={styles.main}>
          <View style={styles.row_withMargin}>
            <Text style={styles.title_screen}>{'Favorite List'}</Text>
          </View>
          {pokemons.length > 0 ? (
            <FlatList
              key={item => item.id}
              data={pokemons.sort(
                (a, b) => b.base_experience > a.base_experience,
              )}
              renderItem={({item}) => {
                return (
                  <Favoritepokecard
                    onPressRemoveFavorite={() => removeFavorites(item)}
                    item={item}
                  />
                );
              }}
            />
          ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                style={{justifyContent: 'space-evenly'}}
                name="heart-outline"
                color={themeColors().notification}
                size={80}
              />
              <Text numberOfLines={2}>
                {'You dont have any favorite pokemon yet'}
              </Text>
            </View>
          )}
        </View>
      }
    />
  );

  function removeFavorites(item) {
    dispatch(removeFavorite(item));
  }
};

const mapStateToProps = state => {
  return {
    favoriteList: state.pokemon.favoriteList,
  };
};

export default connect(mapStateToProps, {removeFavorite})(FavoritePokemon);
