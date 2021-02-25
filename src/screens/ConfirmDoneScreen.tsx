import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { windowWidth } from '../config/styleConstants';

const ConfirmDoneScreen = ({ navigation }) => {
    return (
        <View style={styles.contanier}>
            <View style={styles.headerAnimation}>
                <LottieView
                    source={require('../assets/animations/28810-sea-waves.json')}
                    autoPlay
                    loop
                />
            </View>
            <View>
                <Animatable.View
                    animation="flipInX"
                    duration={1400}
                    // infinite
                    // transition={(0, (1500)[([, duratio   n], ease - out)])}
                    style={styles.centerAnimation}>
                    <LottieView
                        source={require('../assets/animations/676-done.json')}
                        autoPlay
                        loop={false}
                    />
                </Animatable.View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={styles.button}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmDoneScreen;

const styles = StyleSheet.create({
    contanier: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerAnimation: {
        height: 330,
        width: windowWidth,
        transform: [
            {
                rotate: '-180deg',
            },
        ],
    },
    centerAnimation: {
        height: 300,
        width: windowWidth,
        marginTop: -200,
    },
    button: {
        backgroundColor: '#f44336',
        padding: 5,
        borderRadius: 24,
        height: 48,
        width: 180,
        marginBottom: 60,
        alignSelf: 'center',
        // alignContent: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
