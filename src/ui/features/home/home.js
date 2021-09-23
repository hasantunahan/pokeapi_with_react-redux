import React from 'react';
import { FlatList, RefreshControl, View, useColorScheme } from 'react-native';
import {connect} from 'react-redux';
import {setTheme} from '../../../redux/actions/action';
import homeStyle from './style/style';
import BaseView from '../../../core/base/baseview';
import LoadingBar from '../../../core/app/component/loading';
import {API_SERVICES} from '../../../core/service/apiservice';
import ErrorText from '../../../core/app/component/errorview';
import PokelistCard from './_components/pokelist_card';
import {StackActions,NavigationActions, useTheme, withNavigation} from 'react-navigation';
import {themeColors} from '../../../core/extension/color';


const HomeView = props => {
  const scheme = useColorScheme();
  const [loading, setLoading] = React.useState(true);
  const [errmsg, setErrmsg] = React.useState(null);
  const [limit, setLimit] = React.useState(50);
  const [pokeList, setPokeList] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);
  const styles = homeStyle();

  React.useEffect(() => {
    fetchData().then(res => setLoading(false));
  }, [errmsg]);

  refreshList = async () => {
    setPokeList([]);
    await fetchData().then(res => setLoading(false));
  };
  

  return (
    <BaseView
      st_color={themeColors().card}
      content={scheme === 'dark' ? 'light-content' : 'dark-content'}
      view={
        loading ? (
          <LoadingBar />
        ) : errmsg ? (
          <ErrorText err={errmsg} />
        ) : (
          renderView()
        )
      }
    />
  );

  function renderView() {
    return pokeList.length == limit ? (
      <View style={{flex:1}}>
        <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={refreshList}></RefreshControl>
        }
        numColumns={2}
        keyExtractor={item => item.id}
        data={pokeList.sort((a, b) => a.id > b.id)}
        renderItem={({item}) => {
          return <PokelistCard key={item.id} item={item} />;
        }}
      />
      </View>
    ) : (
      <LoadingBar />
    );
  }

  async function fetchData() {
    await API_SERVICES(
      `/pokemon?limit=${limit}`,
      data => {
        data.results.map(async item => {
          await API_SERVICES(
            `/pokemon/${item.name}`,
            dat => {
              setPokeList(pokeList => [...pokeList, dat]);
            },
            err => {
              setLoading(false);
              setErrmsg(err);
            },
          );
        });
      },
      err => {
        {
          setLoading(false);
          setErrmsg(err);
        }
      },
    );
  }
};

const mapStateToProps = state => {
  return {
    theme: state.base.theme,
  };
};

export default connect(mapStateToProps, {setTheme})(withNavigation(HomeView));
