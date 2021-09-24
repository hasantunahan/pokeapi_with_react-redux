import React from 'react';
import {View, Text, useColorScheme, Touchable} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale';
import {connect, useDispatch} from 'react-redux';
import AppImageNetwork from '../../../../core/app/component/image';
import BaseView from '../../../../core/base/baseview';
import {themeColors} from '../../../../core/extension/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  catchPokemon,
  releasePokemon,
} from '../../../../redux/actions/pokemon/pokeaction';
import MyPokemonCard from './_component/mypokemoncard';
import myPokemonStyle from './style/style';

const MyPokemon = props => {
  const styles = myPokemonStyle();
  const scheme = useColorScheme();
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    setPokemons(props.pokeList);
  }, [props.pokeList]);

  return (
    <BaseView
      st_color={themeColors().card}
      content={scheme === 'dark' ? 'light-content' : 'dark-content'}
      view={
        <View style={styles.main_back}>
          <View style={styles.row_withMargin}>
            <Text style={styles.title_screen}>{'Pokemons List'}</Text>
          </View>
          {pokemons.length > 0 ? (
            <FlatList
              data={pokemons.sort(
                (a, b) => b.base_experience > a.base_experience,
              )}
              numColumns={3}
              renderItem={({item}) => {
                return (
                  <MyPokemonCard
                    releasePokemons={() => releasePoke(item)}
                    item={item}
                  />
                );
              }}
            />
          ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text numberOfLines={2} style={{color: themeColors().notification}}>
                {'You dont have any pokemon yet'}
              </Text>
            </View>
          )}
        </View>
      }
    />
  );

  function releasePoke(item) {
    dispatch(releasePokemon(item));
  }
};

const mapStateToProps = state => {
  return {
    pokeList: state.pokemon.pokeList,
  };
};

export default connect(mapStateToProps, {releasePokemon})(MyPokemon);
