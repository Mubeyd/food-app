import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AddressSelect from '../components/AddressSelect';
import BookingStages from '../components/BookingStages';

const AddressScreen = ({ navigation }) => {
    const [state, setstate] = useState(false);
    const [state2, setstate2] = useState(true);
    // const [state3, setstate3] = useState({ state3: 'Home' || 'Work' });
    return (
        <View style={styles.container}>
            <BookingStages orderState="address" />
            <View style={styles.addresses}>
                <Animatable.View animation="slideInRight" duration={1200}>
                    <AddressSelect
                        onPress={() => {
                            setstate(() => !state);
                            setstate2(() => !state2);
                        }}
                        selected={state ?? state2}
                        AddType="Home"
                        AddDetails="367 Harris somewhere "
                    />
                </Animatable.View>
                <Animatable.View animation="slideInRight" duration={1400}>
                    <AddressSelect
                        onPress={() => {
                            setstate(() => !state);
                            setstate2(() => !state2);
                        }}
                        selected={state2 ?? state}
                        AddType="Work"
                        AddDetails="494 Betra Sqaures "
                    />
                </Animatable.View>
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
    addresses: {
        flex: 1,
        margin: 10,
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
