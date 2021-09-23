import React from 'react';
import {View, Text} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale';
import AppImageNetwork from '../../../../core/app/component/image';
import {pokeColors} from '../../../../core/app/constant/poke_color_list';
import BaseView from '../../../../core/base/baseview';
import {themeColors} from '../../../../core/extension/color';
import {capitalizeFirstLetter} from '../../../../core/extension/converter';
import {getHeight, getWidth} from '../../../../core/extension/dimension';
import ImageExtension from '../../../../core/extension/image';
import store from '../../../../redux/store/store';
import pokeDetailsStyle from '../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import pokeball from '../../../../assets/image/pokeball.png';

const PokeDetails = props => {
  const styles = pokeDetailsStyle();
  const param = props.navigation.getParam('data');
  const color = props.navigation.getParam('color');
  const catch_percent = props.navigation.getParam('catch_percent');
  const [pokecatch, setPokeCatch] = React.useState(
    Math.floor(Math.random() * 101),
  );
  return (
    <BaseView
      st_color={color}
      header_text_color={'white'}
      content={'light-content'}
      isBack={'true'}
      name={store.getState('changeHeader').base.header}
      view={
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              height: getHeight(0.17),
              backgroundColor: color,
              alignItems: 'center',
              paddingHorizontal: 10,
              transform: [{scaleX: 2}],
              borderBottomStartRadius: 350,
              borderBottomEndRadius: 350,
            }}>
            <View
              style={{
                flexDirection: 'row',
                transform: [{scaleX: 0.5}],
                width: '100%',
                marginTop: 10,
                paddingHorizontal: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 22, fontWeight: '700', color: 'white'}}>
                {capitalizeFirstLetter(param.name)}
              </Text>
              <Text style={{fontSize: 22, fontWeight: '700', color: 'white'}}>
                #{param.id}
              </Text>
            </View>
          </View>
          <View style={{width: '100%', marginTop: -110, alignItems: 'center'}}>
            <AppImageNetwork
              width={200}
              height={200}
              url={param.sprites.other['official-artwork'].front_default}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 6,
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <TouchableScale style={{marginHorizontal: 5}} activeScale={0.9}>
              <View
                style={{
                  alignItems: 'center',
                  borderRadius: 10,
                  flexDirection: 'row',
                }}>
                <ImageExtension width={20} height={20} image={pokeball} />
                <Text style={{paddingHorizontal: 8, fontWeight: '700',color :themeColors().text}}>
                  Catch Pokemon
                </Text>
              </View>
            </TouchableScale>
            <TouchableScale style={{marginHorizontal: 5}} activeScale={0.9}>
              <View
                style={{
                  alignItems: 'center',
                  borderRadius: 10,
                  flexDirection: 'row',
                }}>
                <Ionicons
                  style={{justifyContent: 'space-evenly'}}
                  name="heart-outline"
                  color={themeColors().text}
                  size={20}
                />
                <Text style={{paddingHorizontal: 8, fontWeight: '700',color :themeColors().text}}>
                  Add Favorite
                </Text>
              </View>
            </TouchableScale>
          </View>

          <View style={{width: '100%', paddingHorizontal: 10, marginTop: 8}}>
            <Text style={{fontSize: 20, fontWeight: '500', marginTop: 5,color :themeColors().text}}>
              Types
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 5,
              }}>
              {param.types.map(type => {
                return (
                  <View
                    key={type.slot}
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      marginRight: 10,
                      borderRadius: 5,
                      backgroundColor: pokeColors[type.type.name],
                    }}>
                    <Text style={{color: 'white'}}>#{type.type.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{width: '100%', paddingHorizontal: 10, marginTop: 8}}>
            <Text style={{fontSize: 20, fontWeight: '500', marginTop: 5,color :themeColors().text}}>
              Base Stats
            </Text>
            {param.stats.map((stat, index) => {
              let percent = parseInt(stat.base_stat) + '%';
              let _percentInt = parseInt(stat.base_stat);
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 3,
                  }}>
                  <Text style={{width: '30%', color: 'gray'}}>
                    {capitalizeFirstLetter(stat.stat.name)}
                  </Text>
                  <View
                    style={{
                      height: 3,
                      borderRadius: 1,
                      width: '61%',
                      backgroundColor: themeColors().card,
                      marginHorizontal: 8,
                    }}>
                    <View
                      style={{
                        position: 'absolute',
                        height: 3,
                        borderRadius: 2,
                        backgroundColor:
                          _percentInt > 100
                            ? '#edd834'
                            : _percentInt > 50
                            ? 'green'
                            : 'red',
                        width: _percentInt > 100 ? '100%' : percent,
                      }}></View>
                  </View>
                  <Text style={{fontWeight: '700'}}>{stat.base_stat}</Text>
                </View>
              );
            })}
          </View>

          <View style={{width: '100%', paddingHorizontal: 10, marginTop: 8}}>
            <Text style={{fontSize: 20, fontWeight: '500', marginTop: 5,color :themeColors().text}}>
              Abilities
            </Text>
            <ScrollView horizontal>
              <View style={{flexDirection: 'row'}}>
                {param.abilities.map(abl => {
                  return (
                    <View
                      key={abl.slot}
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        marginVertical: 5,
                        marginRight: 5,
                        borderRadius: 5,
                        backgroundColor: color,
                      }}>
                      <Text style={{color: 'white'}}>{abl.ability.name}</Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      }
    />
  );
};
export default PokeDetails;
