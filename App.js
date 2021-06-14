import * as React from 'react';
import { Share, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import ShareScreen from './screens/ShareScreen';
import UpdatesScreen from './screens/UpdatesScreen';
import CountdownScreen from './screens/CountdownScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Countdown") {
              iconName = "clock-o";
            } else if (route.name === "Share") {
              iconName = focused ? "folder-open": "folder";
            } else if (route.name === "Updates") {
              iconName = "bullhorn";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Countdown" component={CountdownScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
        <Tab.Screen name="Updates" component={UpdatesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

