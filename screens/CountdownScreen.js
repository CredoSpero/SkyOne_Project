import * as React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function CountdownScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text> Countdown! </Text>
      <Button
        title="You've won $1MM!!!! CLICK HERE!!!"
        onPress={() => navigation.navigate("Note")}
      />
    </View>
  );
}

function CountdownSecondScreen() {
  return <Text>Don't get scammed</Text>;
}

const Stack = createStackNavigator();

export default function CountdownStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={CountdownScreen} />
      <Stack.Screen name="Note" component={CountdownSecondScreen} />
    </Stack.Navigator>
  );
}