import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, useDispatch, useSelector } from 'react-redux';
import { darkTheme } from '../../../core/init/theme/apptheme';
import { setTheme } from '../../../redux/actions/action';
import homeStyle from './style/style';
import BaseView from '../../../core/base/baseview';

const HomeView = props => {
  const styles = homeStyle()
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(props.theme);
  });

  return (
    <BaseView view={renderView()} />
  );

  function renderView() {
    return <TouchableOpacity onPress={() => dispatch(setTheme(darkTheme))}>
      <Text>change theme</Text>
    </TouchableOpacity>
  }

};

const mapStateToProps = state => {
  return {
    theme: state.base.theme,
  };
};

export default connect(mapStateToProps, { setTheme })(HomeView);
