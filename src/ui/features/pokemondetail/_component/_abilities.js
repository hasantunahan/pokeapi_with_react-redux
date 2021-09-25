import React from 'react';
import {View,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { themeColors } from '../../../../core/extension/color';

const AbilitiesCard = ({title,param,color}) =>{
    return(

        <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 5, color: themeColors().text }}>
              {title}
            </Text>
            <ScrollView horizontal>
              <View style={{ flexDirection: 'row' }}>
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
                      <Text style={{ color: 'white' }}>{abl.ability.name}</Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
       
    )
}
export default AbilitiesCard;