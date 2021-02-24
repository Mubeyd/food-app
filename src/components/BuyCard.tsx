import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StarRating from './StarRating';

const BuyCard = () => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.menuText}> Pure Red Juice</Text>
            <View style={styles.starRating}>
                <StarRating ratings={4} reviews={1} />
            </View>
            <Text style={styles.priceText}> $ 10.00</Text>
            <Text style={styles.detailsText}> Free Delivery within 35 Min</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BuyCard;

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: '#fff',
        height: 180,
        elevation: 3,
        width: '100%',
        alignSelf: 'center',
        alignContent: 'space-around',
        justifyContent: 'space-around',
    },
    menuText: {
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    starRating: {
        color: '#fff',
        alignSelf: 'center',
    },
    priceText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center',
    },
    detailsText: {
        color: '#000',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#f44336',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 6,
        height: 32,
        width: 77,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
