import React from 'react';

import { View, Text } from 'react-native'
import { themeColors } from '../extension/color';
import AppStatusBar from '../app/component/statusbar';
import HeaderView from '../../ui/_partial/_header/view/headerview';

const BaseView = ({view}) => {
    return <View style={{ flex: 1, backgroundColor: themeColors().background }}>
        <AppStatusBar />
        <HeaderView />
        {view}
    </View>
}
export default BaseView;