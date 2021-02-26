import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { windowWidth } from '../config/styleConstants';
import RedButton from '../components/RedButton';

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
                    // infinite={0}
                    style={styles.centerAnimation}>
                    <LottieView
                        source={require('../assets/animations/676-done.json')}
                        autoPlay
                        loop={true}
                    />
                </Animatable.View>
            </View>
            <RedButton
                onPress={() => navigation.navigate('HomeScreen')}
                text="Done"
            />
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
});
