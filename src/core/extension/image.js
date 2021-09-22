import React from 'react';

import {Image} from 'react-native';

const ImageExtension = ({image, width, height}) => {
  return (
    <Image
      style={{
        width: width ?? 120,
        height: height ?? 40,
        resizeMode: 'contain',
      }}
      source={image}
    />
  );
};

export default ImageExtension;
