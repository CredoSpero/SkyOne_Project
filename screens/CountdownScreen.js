import React, {useState, useEffect, useRef} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


export default function CountdownScreen() {
    const [timerDays, setTimerDays] =  useState('00');
    const [timerHours, setTimerHours] =  useState('00');
    const [timerMinutes, setTimerMinutes] =  useState('00');
    const [timerSeconds, setTimerSeconds] =  useState('00');

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date('Jul 1, 2021 03:00:00').getTime();
        interval = setInterval(()=> {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000*60*60*24));
            const hours = Math.floor((distance % (1000*60*60*24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((distance % (1000*60))/1000);

            if(distance < 0) {
                //stop timer
                clearInterval(interval.current);    
            } else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(()=> {
        startTimer();
        return() => {
            clearInterval(interval.current);
        };
    })

    return (
        <View style={styles.container}>
        
            <View style={styles.header}>
                <Text style={styles.title}>Isolation Countdown</Text>
                <FontAwesome name='home' size = {99} color='black' />
            </View>
            <View style={styles.topwrapper}>
                <View style={styles.timertop}>{timerDays}</View>
                <View style={styles.timertop}>{timerHours}</View>
                <View style={styles.timertop}>{timerMinutes}</View>
                <View style={styles.timertop}>{timerSeconds}</View>
            </View>
            <View style={styles.bottomwrapper}>
                <View style={styles.timerbottom}> Days : </View>
                <View style={styles.timerbottom}> Hours :</View>
                <View style={styles.timerbottom}> Minutes :</View>
                <View style={styles.timerbottom}> Seconds </View>
            </View>
            <View>
                <Text style={styles.message}>
                    {timerDays > 7 ? "Hang in there!" : (timerDays < 2 ? "Almost done!!" : "One Week Down!") } 
                </Text>
            </View>
            <Image style={styles.image} source='https://c8.alamy.com/comp/2D6R72Y/quarantine-and-chill-lettering-typography-poster-with-text-for-self-quarantine-times-hand-letter-script-motivation-sign-catch-word-art-design-vint-2D6R72Y.jpg' />
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffd0de',
      
    },
    image: {
        position: 'absolute',
        bottom: 0,
        width: 200,
        height: 200,
        borderRadius: 200,

      },
    header: {
        position: 'absolute',
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
    title: {
      fontSize: 60,
      fontWeight: 'bold',
      color: '#f38005',
      margin: 10,
    },
    topwrapper: {
      flexDirection: 'row',
    },
    timertop: {
        width: 150,
        height: 200,
        borderWidth: 3,
        color: '#f8f501',
        backgroundColor: '#d9f8fe',
        fontSize: 80,
        fontWeight: 'bold',
        padding: 10,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomwrapper: {
        padding: 10,
      marginHorizontal: 0,
      flexDirection: 'row',
    },
    timerbottom: {
        padding: 10,
      marginHorizontal: 25,
      fontSize: 30,

    },
    message: {
        fontSize: 50,
        fontWeight: 'bold',
        margin: 10,
        color: '#f38005',
    }
  });