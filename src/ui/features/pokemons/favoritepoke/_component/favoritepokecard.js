import React from 'react';
import {View, Text} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {withNavigation} from 'react-navigation';
import AppImageNetwork from '../../../../../core/app/component/image';
import {pokeColors} from '../../../../../core/app/constant/poke_color_list';
import {capitalizeFirstLetter} from '../../../../../core/extension/converter';
import favoritePokeStyle from '../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoritePokeCard = ({item, navigation, onPressRemoveFavorite}) => {
  const styles = favoritePokeStyle();
  return (
    <TouchableScale
      key={item.id}
      onPress={() =>
        navigation.navigate('PokeDetail', {
          data: item,
          color: pokeColors[item.types[0].type.name],
          catch_percent: Math.floor(Math.random() * 101),
        })
      }>
      <View
        style={{
          width: '100%',
          marginVertical: 5,
          padding: 8,
          borderRadius: 5,
          backgroundColor: pokeColors[item.types[0].type.name],
        }}>
        <View style={styles.row_space_between}>
          <View style={styles.row}>
            <View style={styles.image_back}>
              <AppImageNetwork
                key={item.id}
                url={item.sprites.other['official-artwork'].front_default}
              />
            </View>
            <View
              style={{
                marginHorizontal: 3,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: '700'}}>
                {capitalizeFirstLetter(item.name)}
              </Text>
              <Text style={{color: 'white', fontWeight: '500'}}>
                {'Base Experince : '}
                {item.base_experience}
              </Text>
            </View>
          </View>
          <TouchableScale onPress={() => onPressRemoveFavorite()}>
            <Ionicons
              style={{justifyContent: 'space-evenly', marginRight: 5}}
              name="close"
              color={'white'}
              size={22}
            />
          </TouchableScale>
        </View>
      </View>
    </TouchableScale>
  );
};

export default withNavigation(FavoritePokeCard);
