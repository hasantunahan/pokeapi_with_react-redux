import React from 'react';
import {View, Text, Touchable} from 'react-native';
import headerStyle from '../style/style';
import ImageExtension from '../../../../core/extension/image';
import {app_logo} from '../../../../core/app/constant/imageconstant';
import {connect} from 'react-redux';
import {themeColors} from '../../../../core/extension/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { capitalizeFirstLetter } from '../../../../core/extension/converter';
import { withNavigation } from 'react-navigation';

const HeaderView = props => {
  const styles = headerStyle();
  const {backgroundColor, textcolor, isBack, name,navigation} = props;
  return (
    <View
      style={{
        height: Platform.OS == 'ios' ? 44 : 56,
        width: '100%',
        backgroundColor: backgroundColor,
      }}>
      <View style={styles.row}>
        {isBack ? (
          <TouchableOpacity onPress={()=> navigation.pop()}>
            <View style={styles.row}>
              <Ionicons
                style={{justifyContent: 'space-evenly'}}
                name="chevron-back-sharp"
                color={textcolor}
                size={22}
              />
              <Text
                style={{
                  fontWeight: '700',
                  color: textcolor ?? themeColors().text,
                  marginLeft: 5,
                  letterSpacing: 0.7,
                }}>
                {capitalizeFirstLetter(name)}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <Text
            style={{
              fontWeight: '700',
              color: textcolor ?? themeColors().text,
              marginLeft: 5,
              letterSpacing: 0.7,
            }}>
            {props.header}
          </Text>
        )}
        <ImageExtension width={60} image={app_logo} />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    header: state.base.header,
  };
};

export default connect(mapStateToProps)(withNavigation(HeaderView));
