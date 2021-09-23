import React from 'react';

import {View, Text} from 'react-native';
import {themeColors} from '../extension/color';
import AppStatusBar from '../app/component/statusbar';
import HeaderView from '../../ui/_partial/_header/view/headerview';

const BaseView = ({view, st_color, content,header_text_color,isBack,name}) => {
  return (
    <View style={{flex: 1, backgroundColor: themeColors().background}}>
      <AppStatusBar content={content} st_color={st_color} />
      <HeaderView textcolor={header_text_color}  backgroundColor={st_color} isBack={isBack} name={name}/>
      {view}
    </View>
  );
};
export default BaseView;
