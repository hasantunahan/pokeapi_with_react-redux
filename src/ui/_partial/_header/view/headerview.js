import React from 'react';
import { View } from 'react-native';
import headerStyle from '../style/style';
import ImageExtension from '../../../../core/extension/image';
import { app_logo } from '../../../../core/app/constant/imageconstant';

const HeaderView = () => {
  const styles = headerStyle()
  return <View style={styles.main}>
    <View style={styles.row}>
    <ImageExtension width={60} image={app_logo} />
    </View>
  </View>;
};

export default HeaderView;
