import React from 'react';
import {View,Text} from 'react-native';
import { themeColors } from '../../../../core/extension/color';
import { capitalizeFirstLetter } from '../../../../core/extension/converter';

const BaseStatCard = ({title,param}) =>{
    return (

        <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 5, color: themeColors().text }}>
              {title}
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
                  <Text style={{ width: '30%', color: 'gray' }}>
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
                  <Text style={{ fontWeight: '700', color: themeColors().text}}>{stat.base_stat}</Text>
                </View>
              );
            })}
          </View>

    )
}
export default BaseStatCard;