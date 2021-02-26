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
import RedButton from '../components/RedButton';
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
            <Animatable.View animation="fadeInUp" duration={800}>
                <Animatable.View
                    // animation="swing"
                    duration={400}
                    style={styles.mainView}>
                    <ImageBackground
                        source={require('../assets/menuBack.jpeg')}
                        style={styles.ImageBackground}
                        resizeMode="cover">
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
                                <Text style={styles.menuDetailsText}>
                                    35 mins
                                </Text>
                            </View>
                            <View style={styles.detMainRight}>
                                <Text style={styles.menuDetailsText}>
                                    Address
                                </Text>
                                <Text style={styles.menuDetailsText}>
                                    19 Vegas Street
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </Animatable.View>
            </Animatable.View>
            <RedButton
                onPress={() => navigation.navigate('AddressScreen')}
                text="Confirm Delivery"
            />
        </View>
    );
};

export default SelectScreen;

const styles = StyleSheet.create({
    mainView: {
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
    },
});
