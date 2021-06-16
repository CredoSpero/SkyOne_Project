import * as React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


function ShareScreen({ navigation }) {
  return (

    <View style= {styles.container}>

      <TouchableOpacity 
        style = {styles.configButtonTopBtm} 
        onPress={() => navigation.navigate("Day 1 Message") } > 
        <Text style = {styles.configButtonText}> Day 1 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton} 
        onPress={() => navigation.navigate("Day 2 Message")} > 
        <Text style = {styles.configButtonText}> Day 2 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton} 
        onPress={() => navigation.navigate("Day 3 Message")} > 
        <Text style = {styles.configButtonText}> Day 3 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton} 
        onPress={() => navigation.navigate("Day 4 Message")} > 
        <Text style = {styles.configButtonText}> Day 4 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton} 
        onPress={() => navigation.navigate("Day 5 Message")} > 
        <Text style = {styles.configButtonText}> Day 5 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton2} 
        onPress={() => navigation.navigate("Day 6 Message")} > 
        <Text style = {styles.configButtonText}> Day 6 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton2} 
        onPress={() => navigation.navigate("Day 7 Message")} > 
        <Text style = {styles.configButtonText}> Day 7 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton2} 
        onPress={() => navigation.navigate("Day 8 Message")} > 
        <Text style = {styles.configButtonText}> Day 8 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton2} 
        onPress={() => navigation.navigate("Day 9 Message")} > 
        <Text style = {styles.configButtonText}> Day 9 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton3} 
        onPress={() => navigation.navigate("Day 10 Message")} > 
        <Text style = {styles.configButtonText}> Day 10 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton3} 
        onPress={() => navigation.navigate("Day 11 Message")} > 
        <Text style = {styles.configButtonText}> Day 11 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton3} 
        onPress={() => navigation.navigate("Day 12 Message")} > 
        <Text style = {styles.configButtonText}> Day 12 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButton3} 
        onPress={() => navigation.navigate("Day 13 Message")} > 
        <Text style = {styles.configButtonText}> Day 13 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.configButtonTopBtm} 
        onPress={() => navigation.navigate("Day 14 Message")} > 
        <Text style = {styles.configButtonText}> Day 14 </Text>
      </TouchableOpacity>

    </View>
  );
}

function day1() {
  return (
    <View style= {styles.containerMsg}>
      <Text style = {styles.message}> Every moment is a fresh beginning </Text>;
    </View>
  )
}
function day2() {
  return (
    <View style= {styles.containerMsg1}>
      <Text style = {styles.message}> It does not matter how slowly you go as long as you do not stop </Text>;
    </View>
  )
}
function day3() {
  return (
    <View style= {styles.containerMsg1}>
      <Text style = {styles.message}> It always seems impossible until it's done </Text>;
    </View>
  )
}
function day4() {
  return (
    <View style= {styles.containerMsg1}>
      <Text style = {styles.message}> Train yourself to find a blessing in everything </Text>;
    </View>
  )
}
function day5() {
  return (
    <View style= {styles.containerMsg1}>
      <Text style = {styles.message}> Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time </Text>;
    </View>
  )
}
function day6() {
  return (
    <View style= {styles.containerMsg2}>
      <Text style = {styles.message}> When the going gets tough, the tough get going </Text>;
    </View>
  )
}
function day7() {
  return (
    <View style= {styles.containerMsg2}>
      <Text style = {styles.message}> Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all </Text>;
    </View>
  )
}
function day8() {
  return (
    <View style= {styles.containerMsg2}>
      <Text style = {styles.message}> Never give up on something that you can’t go a day without thinking about </Text>;
    </View>
  )
}
function day9() {
  return (
    <View style= {styles.containerMsg2}>
      <Text style = {styles.message}> Winners never quit, and quitters never win </Text>;
    </View>
  )
}
function day10() {
  return (
    <View style= {styles.containerMsg3}>
      <Text style = {styles.message}> You do what you can for as long as you can, and when you finally can’t, you do the next best thing. You back up but you don’t give up </Text>;
    </View>
  )
}
function day11() {
  return (
    <View style= {styles.containerMsg3}>
      <Text style = {styles.message}> When you give up on life, never give up on yourself, because there is so much for you to keep on giving! </Text>;
    </View>
  )
}
function day12() {
  return (
    <View style= {styles.containerMsg3}>
      <Text style = {styles.message}> Survival can be summed up in three words. Never give up. That's the heart of it really. Just keep trying. </Text>;
    </View>
  )
}
function day13() {
  return (
    <View style= {styles.containerMsg3}>
      <Text style = {styles.message}> Celebrate endings—for they precede new beginnings </Text>;
    </View>
  )
}
function day14() {
  return (
    <View style= {styles.containerMsg}>
      <Text style = {styles.message}> Congratualations! You have completed your 14 days quarantine! </Text>;
    </View>
  )
}


const Stack = createStackNavigator();

export default function ShareStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Encouraging Messages A Day" component={ShareScreen} />
      <Stack.Screen name="Day 1 Message" component={day1} />
      <Stack.Screen name="Day 2 Message" component={day2} />
      <Stack.Screen name="Day 3 Message" component={day3} />
      <Stack.Screen name="Day 4 Message" component={day4} />
      <Stack.Screen name="Day 5 Message" component={day5} />
      <Stack.Screen name="Day 6 Message" component={day6} />
      <Stack.Screen name="Day 7 Message" component={day7} />
      <Stack.Screen name="Day 8 Message" component={day8} />
      <Stack.Screen name="Day 9 Message" component={day9} />
      <Stack.Screen name="Day 10 Message" component={day10} />
      <Stack.Screen name="Day 11 Message" component={day11} />
      <Stack.Screen name="Day 12 Message" component={day12} />
      <Stack.Screen name="Day 13 Message" component={day13} />
      <Stack.Screen name="Day 14 Message" component={day14} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "top",
    // alignItems: "center",
    backgroundColor: "white",
  },
  configButton:{
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 10,
    margin: 9,
  },
  configButtonTopBtm: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 10,
    margin: 9,
  },
  configButton2: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    margin: 9,
  },
  configButton3: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 10,
    margin: 9,
  },
  configButtonText:{
    fontWeight: 'bold',
  },
  message:{
    fontWeight: 'bold',
    fontSize: 30,
    color: "black",
    flex:1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Comic Sans MS",
    height: 250,
  },
  containerMsg: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "gold",
  },
  containerMsg1:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightpink",
  },
  containerMsg2:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightblue",
  },
  containerMsg3:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgreen",
  },
});
