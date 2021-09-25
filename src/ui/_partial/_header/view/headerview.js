import React from 'react';
import {View, Text, Touchable} from 'react-native';
import headerStyle from '../style/style';
import ImageExtension from '../../../../core/extension/image';
import {app_logo} from '../../../../core/app/constant/imageconstant';
import {connect, useDispatch} from 'react-redux';
import {themeColors} from '../../../../core/extension/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {capitalizeFirstLetter} from '../../../../core/extension/converter';
import {withNavigation} from 'react-navigation';
import TouchableScale from 'react-native-touchable-scale';
import english from '../../../../assets/image/english.png';
import turkish from '../../../../assets/image/turkish.png';
import {changeLanguage} from '../../../../redux/actions/action';
import {englishLang} from '../../../../core/init/lang/en-En';
import {turkishLang} from '../../../../core/init/lang/tr-Tr';

const HeaderView = props => {
  const dispatch = useDispatch();
  const styles = headerStyle();
  const {backgroundColor, textcolor, isBack, name, navigation} = props;
  return (
    <View
      style={{
        height: Platform.OS == 'ios' ? 44 : 56,
        width: '100%',
        backgroundColor: backgroundColor,
      }}>
      <View style={styles.row}>
        {isBack ? (
          <TouchableOpacity onPress={() => navigation.pop()}>
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
          <View style={styles.row_center}>
            <TouchableScale
              onPress={() => changeEnglish()}
              style={{marginHorizontal: 8}}>
              <ImageExtension width={20} image={english} />
            </TouchableScale>
            <TouchableScale onPress={() => changeTurkish()}>
              <ImageExtension width={20} image={turkish} />
            </TouchableScale>
            <Text
              style={{
                fontWeight: '700',
                color: textcolor ?? themeColors().text,
                marginLeft: 10,
                letterSpacing: 0.7,
              }}>
              {props.header}
            </Text>
          </View>
        )}

        <ImageExtension width={60} image={app_logo} />
      </View>
    </View>
  );

  function changeEnglish() {
    dispatch(changeLanguage(englishLang));
  }

  function changeTurkish() {
    dispatch(changeLanguage(turkishLang));
  }
};

const mapStateToProps = state => {
  return {
    header: state.base.header,
  };
};

export default connect(mapStateToProps, {})(withNavigation(HeaderView));
