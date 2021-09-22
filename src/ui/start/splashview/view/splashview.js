import React from 'react';
import { View } from 'react-native';
import ImageExtension from '../../../../core/extension/image';
import { app_logo } from '../../../../core/app/constant/imageconstant';
import splashStyle from '../style/style';
import { navigate } from '../../../../navigation/navigation';

const SplashView = props => {
  const styles = splashStyle();
  React.useEffect(() => {
    setTimeout(function () {
      navigate(props, 'HomeNavigation');
    }, 2500);
  });

  return (
    <View style={styles.main}>
      <ImageExtension width={200} height={80} image={app_logo} />
    </View>
  );
};

export default SplashView;
