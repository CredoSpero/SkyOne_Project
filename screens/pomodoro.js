import React from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, View} from 'react-native';

import Counter from '../components/Counter';
import Selectors from '../components/Selectors';

const image = { uri: "https://lh3.googleusercontent.com/DJOvb_IyBXOZqsJjvMUcKmbukaEMnyDrBhSbvbPdw1N57sd8TMM7pbncUDhQ-bq_5s72vk06zN4cD3RIlWkQro8NqsSUmijs8iMr1RS56oYLgo6Db4c9vgxFTrQ6kWyYrsqtOXM" };

export default class Pomodoro extends React.Component {
  constructor() {
    super()
    this.state = {
      work: {
        minutes: 25,
        secondes: 0,
        message: "Time to work!"
      },
      chill: {
        minutes : 5,
        secondes: 0,
        message: "Time to chill!"
      }
    }
  }

  workFormSelector = (min, sec) => {
    this.setState({
      work: {
        minutes: Number(min),
        secondes: Number(sec),
        message: "Time to work!"
      } 
    })
  }

  chillFormSelector = (min, sec) => {
    this.setState({
      chill: {
        minutes: Number(min),
        secondes: Number(sec),
        message: "Time to chill!"
      } 
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ImageBackground source={image} style={styles.image}>
          <View style={{fontSize: 70, fontWeight: 'bolder', marginBottom: 10, color: 'green'}}>Pomodoro Timer</View>
          <View style={{fontSize: 40, color: 'green'}}>For a more productive day!</View>
          <Counter timingWork={this.state.work} timingChill={this.state.chill} />
          <Selectors status="work" time={this.state.work} callback={this.workFormSelector} />
          <Selectors status="chill" time={this.state.chill} callback={this.chillFormSelector} />
          </ImageBackground>
      </KeyboardAvoidingView> 
    )
  }
}

const styles = StyleSheet.create({
    head:{
      marginTop: 80,
    },
    container: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center',
    },
    count: {
      fontSize: 76,
      fontFamily: 'Helvetica',
      marginBottom: 40,
      textAlign: 'center'
    },
    message: {
      textAlign: 'center',
      fontFamily: 'Helvetica',
      fontSize: 35,
      marginTop: 40,
      marginBottom: 20,
    },
    numInput: {
      flexDirection: 'row',
      borderColor: 'grey',
      borderWidth: 1,
      textAlign: 'center',
      marginLeft: 5,
      marginRight: 5,
      height: 30,
      width: 80,
    },
    button: {
      borderColor: '#0273e5',
      borderWidth: 0,
      marginBottom: 10,
      backgroundColor: '#0273e5',
      borderRadius: 30,
      width: 230,
    },
    selectors: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    }
  })