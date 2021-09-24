import React from 'react';
import {View ,Text} from 'react-native'
import AppImageNetwork from '../../../../core/app/component/image';
import { capitalizeFirstLetter } from '../../../../core/extension/converter';
import { getHeight } from '../../../../core/extension/dimension';

const TopViewCard = ({param,color}) => {
    return(
        <View>
            <View
            style={{
              height: getHeight(0.17),
              backgroundColor: color,
              alignItems: 'center',
              paddingHorizontal: 10,
            //  transform: [{ scaleX: 2 }],
              borderBottomStartRadius: 50,
              borderBottomEndRadius: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
               // transform: [{ scaleX: 0.5 }],
                width: '100%',
                marginTop: 10,
                paddingHorizontal: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>
                {capitalizeFirstLetter(param.name)}
              </Text>
              <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>
                #{param.id}
              </Text>
            </View>
          </View>
         
          <View style={{ width: '100%', marginTop: -110, alignItems: 'center' }}>
            <AppImageNetwork
              width={200}
              height={200}
              url={param.sprites.other['official-artwork'].front_default}
            />
          </View>

        </View>
    )
}
export default TopViewCard;