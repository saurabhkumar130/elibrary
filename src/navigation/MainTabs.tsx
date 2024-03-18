import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import {View} from 'react-native';

const tabScreens = [
  {
    id: 'app/home',
    name: 'Home',
    component: HomeScreen,
    tabIcon: {
      default: 'home-outline',
      active: 'home',
    },
  },
  {
    id: 'app/favorites',
    name: 'Favorites',
    component: FavoritesScreen,
    tabIcon: {
      default: 'heart-outline',
      active: 'heart',
    },
  },
];

const MainTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      defaultScreenOptions={{
        tabBarIcon: () => {
          const initialActiveScreen = tabScreens[0];
          return (
            <View
              position="absolute"
              justifyContent={'center'}
              alignItems="center">
              <initialActiveScreen.tabIcon.active />
            </View>
          );
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#D3D3D3',
          height: 55,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'blue',
      }}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.id}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <MaterialCommunityIcon
                  name={screen.tabIcon.active}
                  size={30}
                  color={'blue'}
                  suppressHighlighting
                />
              ) : (
                <MaterialCommunityIcon
                  name={screen.tabIcon.default}
                  size={30}
                  suppressHighlighting
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
export default MainTabs;
