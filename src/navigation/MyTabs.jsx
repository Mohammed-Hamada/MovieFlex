import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeScreenStack, SearchScreen, WatchListScreen } from '../screens';
import { AntDesign } from '@expo/vector-icons';
import { colors } from './../theme';
import { Home, Pin, Search } from '../../assets/svg';

const Tab = createBottomTabNavigator();
const taps = [
  {
    name: 'Home',
    route: 'HomeStack',
    Component: HomeScreenStack,
    Svg: Home,
  },
  {
    name: 'Search',
    route: 'Search',
    Component: SearchScreen,
    Svg: Search,
  },
  {
    name: 'Watch List',
    route: 'WatchList',
    Component: WatchListScreen,
    Svg: Pin,
  },
];
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      backBehavior="history"
      screenOptions={({ navigation }) => ({
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: colors.main,
          borderTopWidth: 1,
          borderTopColor: colors.userRating,
          height: 78,
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{
              marginLeft: 16,
            }}
            onPress={navigation.goBack}
          >
            <AntDesign name="left" size={24} color={colors.mainText} />
          </TouchableOpacity>
        ),
      })}
    >
      {taps.map((tab) => {
        return (
          <Tab.Screen
            key={tab.route}
            name={tab.route}
            component={tab.Component}
            options={{
              headerShown: tab.route !== 'HomeStack',
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <tab.Svg
                    color={focused ? colors.activeTab : colors.nonActiveTab}
                  />
                  <Text
                    style={{
                      color: focused ? colors.activeTab : colors.nonActiveTab,
                      marginTop: 5,
                      fontSize: 12,
                      textAlign: 'center',
                    }}
                  >
                    {tab.name}
                  </Text>
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default MyTabs;
