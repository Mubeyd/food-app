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
