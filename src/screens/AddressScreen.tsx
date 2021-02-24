import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AddressScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.headerText}>AddressScreen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('PaymentScreen')}
                style={styles.button}>
                <Text style={styles.buttonText}>Select Address</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddressScreen;

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
