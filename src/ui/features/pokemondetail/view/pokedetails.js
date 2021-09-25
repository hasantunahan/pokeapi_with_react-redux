import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BaseView from '../../../../core/base/baseview';
import store from '../../../../redux/store/store';
import pokeDetailsStyle from '../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteAndCatchButton from '../_component/favorite_and_catch_button';
import TypeCard from '../_component/_types';
import BaseStatCard from '../_component/_base_stat';
import AbilitiesCard from '../_component/_abilities';
import TopViewCard from '../_component/_topview';
import {connect, useDispatch} from 'react-redux';
import {
  addFavorite,
  catchPokemon,
  releasePokemon,
  removeFavorite,
} from '../../../../redux/actions/pokemon/pokeaction';
import Modal from 'react-native-modal';
import CatchMessageModal from '../../../_partial/_modal/catchMessageModal';
import {themeColors} from '../../../../core/extension/color';
import {Case} from '../../../../redux/_caselist/case';

const PokeDetails = props => {
  const dispatch = useDispatch();
  const styles = pokeDetailsStyle();
  const param = props.navigation.getParam('data');
  const color = props.navigation.getParam('color');
  const catch_percent = props.navigation.getParam('catch_percent');
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isMypokemon, setIsMyPokemon] = React.useState(false);
  const [pokecatch, setPokeCatch] = React.useState(
    Math.floor(Math.random() * 101),
  );
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isCatch, setIsCatch] = React.useState(false);

  React.useEffect(() => {
    if (props.favoriteList.filter(i => i.id == param.id).length > 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [props.favoriteList]);

  React.useEffect(() => {
    if (props.pokeList.filter(i => i.id == param.id).length > 0) {
      setIsMyPokemon(true);
    } else {
      setIsMyPokemon(false);
    }
  }, [props.pokeList]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <BaseView
      st_color={color}
      header_text_color={'white'}
      content={'light-content'}
      isBack={'true'}
      name={store.getState(Case.header).base.header}
      view={
        <ScrollView style={styles.scrool_flex}>
          <TopViewCard param={param} color={color} />
          <FavoriteAndCatchButton
            buttonName={{
              release: props.language.release_pokemon,
              catch: props.language.catch_pokemon,
              remove: props.language.remove_favorite,
              add: props.language.add_favorite,
            }}
            isFavorite={isFavorite}
            isMyPokemon={isMypokemon}
            onPressFavorite={() =>
              isFavorite ? removeFavorites(param) : addFavorites(param)
            }
            onPressCatch={() =>
              isMypokemon ? releasePokemons(param) : catchPokemons(param)
            }
          />
          {renderBaseExperience()}
          <TypeCard title={props.language.details.types} param={param} />
          <BaseStatCard
            title={props.language.details.base_stat}
            param={param}
          />
          <AbilitiesCard
            title={props.language.details.abilities}
            param={param}
            color={color}
          />
          <CatchMessageModal
            isCatch={isCatch}
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          />
        </ScrollView>
      }
    />
  );

  function renderBaseExperience() {
    return (
      <View style={{width: '100%', paddingHorizontal: 10, marginTop: 8}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            marginTop: 5,
            color: themeColors().text,
          }}>
          {props.language.base_experince}
        </Text>
        <Text style={{color: themeColors().text, marginTop: 5}}>
          {param.base_experience}
        </Text>
      </View>
    );
  }

  function addFavorites(poke) {
    dispatch(addFavorite(poke));
  }

  function removeFavorites(poke) {
    dispatch(removeFavorite(poke));
  }

  function catchPokemons(poke) {
    if (catch_percent > pokecatch) {
      setIsCatch(true);
      toggleModal();
      dispatch(catchPokemon(poke));
    } else {
      setIsCatch(false);
      toggleModal();
    }
  }

  function releasePokemons(poke) {
    dispatch(releasePokemon(poke));
  }
};
const mapStateToProps = state => {
  return {
    favoriteList: state.pokemon.favoriteList,
    pokeList: state.pokemon.pokeList,
    language: state.base.language,
  };
};

export default connect(mapStateToProps)(PokeDetails);
