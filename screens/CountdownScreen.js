import * as React from "react";
import { ImageBackground, Text, View, Button, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Foundation } from '@expo/vector-icons'; 


const image = { uri: "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80" };

function CountdownScreen({ navigation }) {
  return (

    <View style= {styles.container}>
      <ImageBackground source={image} style={styles.imagebg}> 

        {/* <Image style = {styles.image} source = {{uri: "https://proofmart.com/wp-content/uploads/2020/10/CALENDER-MONTH-ICON-PRODUUCT.png"}} /> */}
        <Foundation name="calendar" size = {50} color = "black"/>
        <Text> Countdown timer! </Text>

        <Button
          title="You've won $1MM!!!! CLICK HERE!!!"
          onPress={() => navigation.navigate("Note")}
        />
        
      </ImageBackground>
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
      <Stack.Screen name="Countdown Timer" component={CountdownScreen} />
      <Stack.Screen name="Note" component={CountdownSecondScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "top",
    // alignItems: "center",
    // backgroundColor: "white",
  },
  imagebg: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    alignItems: "center",
    opacity: 1.0,
  },
});
