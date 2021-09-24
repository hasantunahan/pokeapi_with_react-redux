import React from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  useColorScheme,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {setHeader, setTheme} from '../../../redux/actions/action';
import homeStyle from './style/style';
import BaseView from '../../../core/base/baseview';
import LoadingBar from '../../../core/app/component/loading';
import {API_SERVICES} from '../../../core/service/apiservice';
import ErrorText from '../../../core/app/component/errorview';
import PokelistCard from './_components/pokelist_card';
import {withNavigation} from 'react-navigation';
import {themeColors} from '../../../core/extension/color';
import store from '../../../redux/store/store';
import {Case} from '../../../redux/_caselist/case';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SortingData} from '../../../core/app/constant/sorting_data';
import TouchableScale from 'react-native-touchable-scale';

const HomeView = props => {
  const styles = homeStyle();
  const scheme = useColorScheme();
  const [loading, setLoading] = React.useState(true);
  const [errmsg, setErrmsg] = React.useState(null);
  const [limit, setLimit] = React.useState(151);
  const [pokeList, setPokeList] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);
  const [value, onChangeText] = React.useState('');
  const [sort, setSort] = React.useState(0);
  const [sorting, setSorting] = React.useState(SortingData);

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
      <View style={{flex: 1}}>
        {renderSortingList()}
        {renderSearchBar()}
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={refreshList}></RefreshControl>
          }
          numColumns={2}
          keyExtractor={item => item.id}
          data={filterList(sort)}
          renderItem={({item}) => {
            return <PokelistCard key={item.id} item={item} />;
          }}
        />
      </View>
    ) : (
      <LoadingBar />
    );
  }

  function renderSearchBar() {
    return (
      <View style={styles.searchSection}>
        <Ionicons
          style={styles.searchIcon}
          name="search"
          color={themeColors().border}
          size={22}
        />
        <TextInput
          style={styles.input}
          placeholder="enter pokemon name"
          onChangeText={searchString => {
            onChangeText(searchString.toLowerCase());
          }}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }

  function renderSortingList() {
    return (
      <View style={{paddingHorizontal: 10, marginVertical: 5}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {sorting.map(item => {
            return (
              <TouchableScale
                style={{
                  backgroundColor: themeColors().card,
                  marginRight: 12,
                  paddingHorizontal: 4,
                  borderRadius: 4,
                }}
                activeScale={0.97}
                onPress={() => setSort(item.id)}
                key={item.id}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    style={{marginRight: 2}}
                    color={themeColors().text}
                    name={item.icon}
                    size={18}
                  />
                  <Text style={{fontWeight: '500',color :themeColors().text}}>{item.name}</Text>
                </View>
              </TouchableScale>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  function filterList(id) {
    if (pokeList.length == limit) {
      if (id == 1) {
        return pokeList
          .filter(item => item.name.toLowerCase().includes(value))
          .sort((a, b) => b.base_experience > a.base_experience);
      } else if (id == 2) {
        return pokeList
          .filter(item => item.name.toLowerCase().includes(value))
          .sort((a, b) => a.base_experience > b.base_experience);
      } else if (id == 3) {
        return pokeList
          .filter(item => item.name.toLowerCase().includes(value))
          .sort((a, b) => b.id > a.id);
      } else if (id == 4) {
        return pokeList
          .filter(item => item.name.toLowerCase().includes(value))
          .sort((a, b) => a.id > b.id);
      } else {
        return pokeList
          .filter(item => item.name.toLowerCase().includes(value))
          .sort((a, b) => a.id > b.id);
      }
    }
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
    header: state.base.header,
  };
};

export default connect(mapStateToProps, {setTheme})(withNavigation(HomeView));
