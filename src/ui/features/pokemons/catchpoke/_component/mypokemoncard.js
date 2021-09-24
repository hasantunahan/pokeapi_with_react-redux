import React from 'react';
import {View, Text} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {themeColors} from '../../../../../core/extension/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImageNetwork from '../../../../../core/app/component/image';
import myPokemonStyle from '../style/style';
import {withNavigation} from 'react-navigation';
import {pokeColors} from '../../../../../core/app/constant/poke_color_list';

const MyPokemonCard = ({item, releasePokemons, navigation}) => {
  const styles = myPokemonStyle();
  return (
    <TouchableScale
      onPress={() =>
        navigation.navigate('PokeDetail', {
          data: item,
          color: pokeColors[item.types[0].type.name],
          catch_percent: Math.floor(Math.random() * 101),
        })
      }
      key={item.id}
      activeScale={0.97}>
      <View style={styles.main}>
        <View style={styles.top_info}>
          <View style={styles.experience}>
            <Text style={styles.experience_text}>{item.base_experience}</Text>
          </View>

          <TouchableScale onPress={() => releasePokemons()}>
            <View style={styles.release_poke}>
              <Ionicons
                style={{justifyContent: 'space-evenly'}}
                name="close"
                color={themeColors().notification}
                size={14}
              />
            </View>
          </TouchableScale>
        </View>
        <AppImageNetwork
          width={82}
          height={82}
          key={item.id}
          url={item.sprites.other['official-artwork'].front_default}
        />
      </View>
    </TouchableScale>
  );
};
export default withNavigation(MyPokemonCard);
