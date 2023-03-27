import {useEffect, useState, useCallback, useMemo} from 'react';
import {Text, View, Image, Pressable, FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import debounce from 'lodash.debounce';
import Filters from './filter/Filters';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {foodSelector} from '../store/selectors';
import {getFood} from '../store/actions';
import {profileSelector} from '../../profile/store/selectors';
import FoodListItem from './item';
import {getProfile} from '../../profile/store/actions';

const sections = ['starters', 'mains', 'desserts'];

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const profile = useSelector(profileSelector);
  const data = useSelector(foodSelector);
  const [searchBarText, setSearchBarText] = useState('');
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<null | string>(null);

  const filteredData = useMemo(() => {
    if (selectedFilter !== null) {
      return data.filter((d: any) => d.category === selectedFilter);
    }
    return data;
  }, [data, selectedFilter]);

  const lookup = useCallback(q => {
    setQuery(q);
  }, []);

  const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup]);

  const handleSearchChange = text => {
    setSearchBarText(text);
    debouncedLookup(text);
  };

  const handleFiltersChange = useCallback(
    (index: number) => {
      const filter = sections[index];
      if (selectedFilter === filter) {
        setSelectedFilter(null);
      } else {
        setSelectedFilter(filter);
      }
    },
    [selectedFilter],
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(getFood());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../media/littleLemonLogo.png')}
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        {profile && (
          <Pressable
            style={styles.avatar}
            onPress={() => {
              navigation.navigate('Profile');
              dispatch(getProfile());
            }}>
            {profile.image ? (
              <Image source={{uri: profile.image}} style={styles.avatarImage} />
            ) : (
              <View style={styles.avatarEmpty}>
                <Text style={styles.avatarEmptyText}>
                  {profile.firstName && Array.from(profile.firstName)[0]}
                  {profile.lastName && Array.from(profile.lastName)[0]}
                </Text>
              </View>
            )}
          </Pressable>
        )}
      </View>
      <View style={styles.heroSection}>
        <Text style={styles.heroHeader}>Little Lemon</Text>
        <View style={styles.heroBody}>
          <View style={styles.heroContent}>
            <Text style={styles.heroHeader2}>Chicago</Text>
            <Text style={styles.heroText}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <Image
            style={styles.heroImage}
            source={require('../../../media/restauranfood.png')}
            accessible={true}
            accessibilityLabel={'Little Lemon Food'}
          />
        </View>
        <Searchbar
          placeholder="Search"
          placeholderTextColor="#333333"
          onChangeText={handleSearchChange}
          value={searchBarText}
          style={styles.searchBar}
          iconColor="#333333"
          inputStyle={{color: '#333333'}}
          elevation={0}
        />
      </View>
      <Text style={styles.delivery}>ORDER FOR DELIVERY!</Text>
      <Filters
        value={selectedFilter}
        onChange={handleFiltersChange}
        sections={sections}
      />
      <FlatList
        style={styles.sectionList}
        data={filteredData}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => {
          return (
            <FoodListItem
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
