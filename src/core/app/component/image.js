import React from 'react';
import {View, Image} from 'react-native';

const AppImageNetwork = ({
  hiddenBorder = false,
  url,
  resizeMode = 'contain',
  width = 60,
  height = 60,
  position,
  extension,
  marginBottom,
  marginTop
}) => {
  return (
    <Image
      source={{uri: `${url}`}}
      style={{
        marginTop:marginTop ?? 0,
        marginBottom : marginBottom ?? 0,
        width: width,
        height: height,
        position: position ?? 'relative',
        resizeMode: resizeMode,
        borderRadius: hiddenBorder ? 0 : 13,
      }}
    />
  );
};
export default AppImageNetwork;