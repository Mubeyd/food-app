import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { windowWidth } from '../config/styleConstants';

const ConfirmDoneScreen = ({ navigation }) => {
    return (
        <View style={styles.contanier}>
            <View style={styles.headerAnimation}>
                <LottieView
                    source={require('../assets/animations/8881-wave.json')}
                    autoPlay
                    loop
                />
            </View>
            <View style={styles.centerAnimation}>
                <LottieView
                    source={require('../assets/animations/676-done.json')}
                    autoPlay
                    loop
                />
            </View>
            {/* <Text style={styles.headerText}>ConfirmDoneScreen</Text> */}
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
        height: 200,
        width: 400,
    },
    centerAnimation: {
        height: 300,
        width: windowWidth,
    },
    headerText: {
        fontSize: 44,
        fontWeight: 'bold',
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
