import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


export default class Selectors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mins: props.time.minutes,
      secs: props.time.secondes
    }
  }

  handleMinChange = (e) => {
    const mins = e
    this.setState({mins}, () => {
      this.props.callback(this.state.mins, this.state.secs)
    })  
  }

  handleSecChange = (e) => {
    const secs = e
    this.setState({secs}, () => {
      this.props.callback(this.state.mins, this.state.secs)
    })
  }

  render() {
    return (
      <View style={styles.selectors}>
        <Text>Select {this.props.status} time</Text>
        <TextInput 
          style={styles.numInput}
          keyboardType = 'number-pad'
          defaultValue = {`${this.props.time.minutes}`}
          onChangeText = {this.handleMinChange}
        />
        <Text> : </Text>
        <TextInput 
          style={styles.numInput}
          keyboardType = 'number-pad'
          value = {`${this.props.time.secondes}`}
          onChangeText = {this.handleSecChange}
        />
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