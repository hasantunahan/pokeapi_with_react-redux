import React from 'react';
import {View, Text} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import ImageExtension from '../../../../core/extension/image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {themeColors} from '../../../../core/extension/color';
import pokeball from '../../../../assets/image/pokeball.png';
import pokeball_open from '../../../../assets/image/pokeball_open.png';
const FavoriteAndCatchButton = ({
  onPressFavorite,
  onPressCatch,
  isFavorite,
  isMyPokemon,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 6,
        marginHorizontal: 10,
        justifyContent: 'space-between',
      }}>
      <TouchableScale
        onPress={() => onPressCatch()}
        style={{marginHorizontal: 5}}
        activeScale={0.9}>
        {isMyPokemon ? (
          <View
            style={{
              alignItems: 'center',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <ImageExtension width={20} height={20} image={pokeball_open} />
            <Text
              style={{
                paddingHorizontal: 8,
                fontWeight: '700',
                color: themeColors().text,
              }}>
              Release Pokemon
            </Text>
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <ImageExtension width={20} height={20} image={pokeball} />
            <Text
              style={{
                paddingHorizontal: 8,
                fontWeight: '700',
                color: themeColors().text,
              }}>
              Catch Pokemon
            </Text>
          </View>
        )}
      </TouchableScale>
      <TouchableScale
        onPress={() => onPressFavorite()}
        style={{marginHorizontal: 5}}
        activeScale={0.9}>
        {isFavorite ? (
          <View
            style={{
              alignItems: 'center',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <Ionicons
              style={{justifyContent: 'space-evenly'}}
              name="heart-sharp"
              color={themeColors().notification}
              size={20}
            />
            <Text
              style={{
                paddingHorizontal: 8,
                fontWeight: '700',
                color: themeColors().notification,
              }}>
              Remove Favorite
            </Text>
          </View>
        ) : (
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
            <Text
              style={{
                paddingHorizontal: 8,
                fontWeight: '700',
                color: themeColors().text,
              }}>
              Add Favorite
            </Text>
          </View>
        )}
      </TouchableScale>
    </View>
  );
};
export default FavoriteAndCatchButton;
