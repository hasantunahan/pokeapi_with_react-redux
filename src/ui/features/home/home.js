import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, useDispatch, useSelector} from 'react-redux';
import {themeColors} from '../../../core/extension/color';
import {darkTheme} from '../../../core/init/theme/apptheme';
import {API_SERVICES} from '../../../core/service/apiservice';
import {setTheme} from '../../../redux/actions/action';
import store from '../../../redux/store/store';

const HomeView = props => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  React.useEffect(() => {
    console.log(props.theme);
  });
  return (
    <View style={{flex: 1, backgroundColor: themeColors().background}}>
      <Text>hello</Text>
      <TouchableOpacity onPress={() => dispatch(setTheme(darkTheme))}>
        <Text>change theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.base.theme,
  };
};

export default connect(mapStateToProps, {setTheme})(HomeView);
