import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddressSelect from '../components/AddressSelect';
import BookingStages from '../components/BookingStages';

const AddressScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BookingStages orderState="address" />
            <View style={{ flex: 1, margin: 10 }}>
                <AddressSelect
                    AddType="Home"
                    AddDetails="367 Harris somewhere "
                />
                <AddressSelect AddType="Work" AddDetails="494 Betra Sqaures " />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('PaymentScreen')}
                style={styles.button}>
                <Text style={styles.buttonText}>Pay</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddressScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
