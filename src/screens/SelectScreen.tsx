import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import BookingStages from '../components/BookingStages';
import BuyCard from '../components/BuyCard';
import {
    Red500,
    Red700,
    windowHeight,
    windowWidth,
} from '../config/styleConstants';

const SelectScreen = ({ navigation }) => {
    return (
        <View>
            <BookingStages orderState="select" />
            {/* <Text style={styles.headerText}>SelectScreen</Text> */}
            <Animatable.View
                animation="rubberBand"
                duraton="1500"
                style={styles.mainView}>
                <ImageBackground
                    source={require('../assets/menuBack.jpeg')}
                    style={styles.ImageBackground}
                    resizeMode="stretch">
                    <Text style={styles.menuDetailsHeader}>
                        Boritos with minced Meat Filling
                    </Text>
                    <Text style={styles.menuTypeText}>Pure Red Juice</Text>
                    <Text style={styles.menuTypePrice}>$ 10.00</Text>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.numbutton}>
                        <Text style={styles.numbuttonText}>+ 1Juice -</Text>
                    </TouchableOpacity>
                    <View style={styles.detMainView}>
                        <View style={styles.detMainLeft}>
                            <Text style={styles.menuDetailsText}>
                                Delivery Time
                            </Text>
                            <Text style={styles.menuDetailsText}>35 mins</Text>
                        </View>
                        <View style={styles.detMainRight}>
                            <Text style={styles.menuDetailsText}>Address</Text>
                            <Text style={styles.menuDetailsText}>
                                19 Vegas Street
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </Animatable.View>
            <TouchableOpacity
                onPress={() => navigation.navigate('AddressScreen')}
                style={styles.button}>
                <Text style={styles.buttonText}>Confirm Delivery</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 44,
        fontWeight: 'bold',
    },
    mainView: {
        // borderRadius: 24,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    ImageBackground: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.7,
        marginVertical: 12,
        alignSelf: 'center',
    },
    menuDetailsHeader: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 14,
        marginVertical: 24,
    },
    menuTypeText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 18,
    },
    menuTypePrice: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        marginVertical: 18,
    },
    numbutton: {
        backgroundColor: Red500,
        padding: 5,
        borderRadius: 24,
        height: 48,
        width: 180,
        marginVertical: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
    },
    numbuttonText: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
    },
    detMainView: {
        flexDirection: 'row',
    },
    detMainLeft: {
        flexDirection: 'column',
        marginLeft: 50,
    },
    detMainRight: {
        flexDirection: 'column',
        marginLeft: 100,
    },
    menuDetailsText: {
        color: '#fff',
        alignSelf: 'flex-start',
        fontSize: 14,
        // marginLeft: 12,
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
