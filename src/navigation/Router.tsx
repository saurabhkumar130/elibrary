import React from 'react';
import {
  createStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/stack';

import BookDetailsScreen from '../screens/BookDetailsScreen';
import MainTabs from './MainTabs';

const commonStackNavigatorOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_bottom',
  headerShown: false,
  headerLeft: undefined,
  statusBarHidden: true,
};

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={commonStackNavigatorOptions}>
      <Stack.Screen name="Tabs" component={MainTabs} />
      <Stack.Screen
        name="BookDetailsScreen"
        component={BookDetailsScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: 'Book Details',
        }}
      />
    </Stack.Navigator>
  );
};
export default Router;
