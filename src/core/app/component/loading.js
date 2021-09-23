import React from 'react'
import {View,Text, ActivityIndicator} from 'react-native'
import { themeColors } from '../../extension/color';
const LoadingBar = ()=>{
    return (<View style={{flex:1,alignItems :'center',justifyContent :'center'}}>
        <ActivityIndicator size="large" color={themeColors().border} />
    </View>)
}
export default LoadingBar;