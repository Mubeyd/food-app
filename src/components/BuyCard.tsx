import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StarRating from './StarRating';

const BuyCard = (props) => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.menuText}> Pure Red Juice</Text>
            <View style={styles.starRating}>
                <StarRating ratings={4} reviews={1} />
            </View>
            <Text style={styles.priceText}> $ 10.00</Text>
            <Text style={styles.detailsText}> Free Delivery within 35 Min</Text>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BuyCard;

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: '#fff',
        height: 220,
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
        fontSize: 20,
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
        color: '#757575',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#f44336',
        margin: 5,
        borderRadius: 24,
        height: 48,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
