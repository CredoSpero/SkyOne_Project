import React from 'react';
import { Text, View, Button, Vibration, StyleSheet  } from 'react-native';


const minToSec = mins => mins * 60 

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.intervalHandle
    this.state = {  
      ...this.props.timingWork,
      secondsRemaining: minToSec(this.props.timingWork.minutes) - 1,
      chill: {...this.props.timingChill},
      work: {...this.props.timingWork}
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
      this.setState({
        ...nextProps.timingWork,
        secondsRemaining: minToSec(nextProps.timingWork.minutes) - 1,
        chill: {...nextProps.timingChill},
        work: {...nextProps.timingWork}
      })
    }
  }

  tick = () => {
    if (this.state.secondsRemaining < 0) {
      this.setState({secondsRemaining: this.state.secondes})
    }
    let minutes = Math.floor(this.state.secondsRemaining / 60);
    let secondes = this.state.secondsRemaining - (minutes * 60);

    this.setState({minutes, secondes})

    if (minutes === 0 & secondes === 0) {
      Vibration.vibrate([500, 500, 500])
      clearInterval(this.intervalHandle)
      this.toggleCounter()
      this.intervalHandle = setInterval(this.tick, 1000)
    }

    this.setState(prevState => ({secondsRemaining: prevState.secondsRemaining - 1}))
  }

  toggleCounter = () => {
    if (this.state.message === "Time to work!") {
      this.setState({
        ...this.state.chill,
        secondsRemaining: minToSec(this.state.chill.minutes),
      })
    } else {
      this.setState({
        ...this.state.work,
        secondsRemaining: minToSec(this.state.work.minutes),
      }) 
    }
  }

  startTimer = () => {this.intervalHandle = setInterval(this.tick, 1000)}

  pauseTimer = () => {clearInterval(this.intervalHandle)}

  resetTimer = () => {
    clearInterval(this.intervalHandle)
    this.setState({
      ...this.props.timingWork,
      secondsRemaining: minToSec(this.props.timingWork.minutes),
    })
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle)
  }
 
  render() {
    const paddedMin = this.state.minutes < 10 ? '0' : ""
    const paddedSec = this.state.secondes < 10 ? '0' : ""
    return (
      <View>
        <Text style={styles.message}>{this.state.message}</Text>
        <Text style={styles.count}>{paddedMin}{this.state.minutes} : {paddedSec}{this.state.secondes}</Text>
        <View style={styles.button}>
          <Button color="#f6e359" onPress={this.startTimer} title="Start"></Button>
        </View>
        <View style={styles.button}>
          <Button color="blue" onPress={this.pauseTimer} title="Pause"></Button>
        </View>
        <View style={styles.button}>
          <Button color="green" onPress={this.resetTimer} title="Reset"></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    head:{
      marginTop: 80,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    count: {
      fontSize: 80,
      fontFamily: 'Helvetica',
      marginBottom: 40,
      textAlign: 'center'
    },
    message: {
      textAlign: 'center',
      fontFamily: 'Helvetica',
      fontSize: 40,
      color: '#5662ff',
      fontWeight: 'bold',
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