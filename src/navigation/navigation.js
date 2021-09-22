import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {navigationList} from './navigationlist';

const Navigation = createStackNavigator(navigationList, {
  headerMode: 'none',
  header: null,
  initialRouteName: 'Splash',
});

export default createAppContainer(Navigation);

export function navigate(props, route, arg) {
  props.navigation.navigate(route, arg);
}
