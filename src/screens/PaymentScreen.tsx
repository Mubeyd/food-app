import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookingStages from '../components/BookingStages';

const PaymentScreen = ({ navigation }) => {
    return (
        <View>
            <BookingStages orderState="delivery" />
            <Text style={styles.headerText}>PaymentScreen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('ConfirmDoneScreen')}
                style={styles.button}>
                <Text style={styles.buttonText}>Select Payment</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 44,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#f44336',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 14,
        height: 32,
        width: 100,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
