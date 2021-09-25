import React from 'react';
import { View, Text } from 'react-native';
import { pokeColors } from '../../../../core/app/constant/poke_color_list';
import { themeColors } from '../../../../core/extension/color';

const TypeCard = ({title,param}) => {
    return (
        <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 5, color: themeColors().text }}>
                {title}
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
                            <Text style={{ color: 'white' }}>#{type.type.name}</Text>
                        </View>
                    );
                })}
            </View>
        </View>

    )
}
export default TypeCard;