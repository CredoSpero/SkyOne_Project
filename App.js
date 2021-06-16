import * as React from 'react';
import { Share, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";


import ShareScreen from './screens/ShareScreen';
import CountdownScreen from './screens/CountdownScreen';
import RockPaperScissors from './screens/RockPaperScissors';
import Pomodoro from './screens/pomodoro';

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
            } else if (route.name === "Messages") {
              iconName = "envelope";
              // <Ionicons name="heart-circle" size={24} color="black" />
            } else if (route.name === "Mini-Games") {
              iconName = "gamepad";
            } else if (route.name == "Timer") {
              iconName = "book";
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
        <Tab.Screen name="Timer" component={Pomodoro} />
        <Tab.Screen name="Messages" component={ShareScreen} />
        <Tab.Screen name="Mini-Games" component={RockPaperScissors} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

