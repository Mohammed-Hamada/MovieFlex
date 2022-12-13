import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors, sizes } from '../theme';
import { ControlTabs, MoviesList, SearchBar } from '../components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';

const homeScreenTabsData = [
  '/movie/now_playing',
  '/movie/upcoming',
  '/movie/top_rated',
  '/movie/popular',
];

const HomeScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.screenView}>
      <Text style={styles.title}>What do you want to watch?</Text>
      <SearchBar
        onFocus={() => {
          navigation.navigate('Search');
          Keyboard.dismiss();
        }}
        navigation={navigation}
      />
      <View style={{ marginTop: sizes.mainMarginVertical + 10 }}>
        <MoviesList
          width={145}
          height={220}
          url={'/movie/popular'}
          moviesNumbers
          horizontal
        />
      </View>

      <ControlTabs
        values={['Now Playing', 'Upcoming', 'Top Rated', 'Popular']}
        selectedIndex={selectedIndex}
        onTabPress={(index) => {
          setSelectedIndex(index);
        }}
      />
      <>
        {homeScreenTabsData.map((item, i) => {
          if (selectedIndex === i) {
            return (
              <MoviesList
                style={styles.tabList}
                numColumns={3}
                width={120}
                height={155}
                url={item}
                key={item}
              />
            );
          }
        })}
      </>
    </View>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerShown: route.name === 'Details',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <AntDesign name="left" size={24} color={colors.mainText} />
            </TouchableOpacity>
          ),
        };
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  screenView: {
    marginTop: sizes.mainMarginTop + 10,
  },
  title: {
    color: colors.mainText,
    fontSize: sizes.fonts.titles,
    marginLeft: sizes.mainMarginHorizontal + 5,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  tabList: {
    marginTop: sizes.mainMarginVertical + 10,
  },
});

export default HomeScreenStack;
