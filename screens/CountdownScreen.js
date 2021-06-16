import * as React from "react";
import { Text, View, Button, Image } from "react-native";
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
       <Image style = {styles.image} source = {{uri: "https://preview.pixlr.com/images/800wm/100/1/1001503340.jpg"}} />
      <Text> Countdown timer! </Text>

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

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  
});
