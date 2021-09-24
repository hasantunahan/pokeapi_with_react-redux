import React from 'react';
import {View, Text} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {withNavigation} from 'react-navigation';
import AppImageNetwork from '../../../../core/app/component/image';
import {pokeColors} from '../../../../core/app/constant/poke_color_list';
import {capitalizeFirstLetter} from '../../../../core/extension/converter';
import pokeCardStyle from './style/style';

const PokelistCard = ({item,  navigation}) => {
  const styles = pokeCardStyle();
  return (
    <View
      style={{
        width: '46%',
        margin: '2%',
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: pokeColors[item.types[0].type.name],
      }}>
          
      <TouchableScale
        onPress={() =>
          navigation.navigate('PokeDetail', {
            data: item,
            color: pokeColors[item.types[0].type.name],
            catch_percent : Math.floor(Math.random() * 101)
          })
        }
        activeScale={0.9}>
        <View style={styles.main}>
          <View style={styles.margin_5}>
            <Text style={styles.text_color_white}>#{item.id}</Text>
            <Text style={styles.text_color_white}>
              {capitalizeFirstLetter(item.name)}
            </Text>
            <View style={styles.row}>
              {item.types.map(type => {
                return (
                  <View key={type.slot} style={styles.type}>
                    <Text style={styles.type_text}>#{type.type.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.image_back}>
            <AppImageNetwork
              key={item.id}
              url={item.sprites.other['official-artwork'].front_default}
            />
          </View>
        </View>
      </TouchableScale>
    </View>
  );
};
export default withNavigation(PokelistCard);
