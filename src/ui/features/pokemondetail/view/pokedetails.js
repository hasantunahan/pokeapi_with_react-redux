import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BaseView from '../../../../core/base/baseview';
import store from '../../../../redux/store/store';
import pokeDetailsStyle from '../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteAndCatchButton from '../_component/favorite_and_catch_button';
import TypeCard from '../_component/_types';
import BaseStatCard from '../_component/_base_stat';
import AbilitiesCard from '../_component/_abilities';
import TopViewCard from '../_component/_topview';
import { connect, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../../redux/actions/pokemon/pokeaction';

const PokeDetails = props => {
  const dispatch = useDispatch();
  const styles = pokeDetailsStyle();
  const param = props.navigation.getParam('data');
  const color = props.navigation.getParam('color');
  const catch_percent = props.navigation.getParam('catch_percent');
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [pokecatch, setPokeCatch] = React.useState(
    Math.floor(Math.random() * 101),
  );

  React.useEffect(() => {
    if (props.favoriteList.filter(i => i.id == param.id).length > 0) {
      setIsFavorite(true)
    } else {
      console.log();
      setIsFavorite(false)
    }
  }, [props.favoriteList])


  return (
    <BaseView
      st_color={color}
      header_text_color={'white'}
      content={'light-content'}
      isBack={'true'}
      name={store.getState('changeHeader').base.header}
      view={
        <ScrollView style={styles.scrool_flex}>
          <TopViewCard param={param} color={color} />
          <FavoriteAndCatchButton isFavorite={isFavorite} onPressFavorite={() => isFavorite ? removeFavorites(param) : addFavorites(param)} onPressCatch={() => console.log('ben :' + pokecatch + ' yakalama :' + catch_percent)} />
          <TypeCard param={param} />
          <BaseStatCard param={param} />
          <AbilitiesCard param={param} color={color} />
        </ScrollView>
      }
    />
  );

  function addFavorites(poke) {
    dispatch(addFavorite(param))
  }

  function removeFavorites(poke) {
    dispatch(removeFavorite(param))
  }


};
const mapStateToProps = (state) => {
  return {
    favoriteList: state.pokemon.favoriteList
  }
}

export default connect(mapStateToProps)(PokeDetails);
