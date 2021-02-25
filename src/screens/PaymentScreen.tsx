import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookingStages from '../components/BookingStages';
import CreditDetails from '../components/CreditDetails';
import PaymentButton from '../components/PaymentButton';

const PaymentScreen = ({ navigation }) => {
    const [state, setstate] = useState(false);
    const [state2, setstate2] = useState(true);
    const [showDetails, setshowDetails] = useState(true);
    const [showDetails2, setshowDetails2] = useState(true);
    return (
        <View>
            <BookingStages orderState="delivery" />
            <View style={styles.headerVeiw}>
                <Text style={styles.headerText}>
                    Choose your payment method
                </Text>
                <Text style={styles.headerPrice}>$ 10</Text>
            </View>
            <View style={styles.buttonsView}>
                <PaymentButton
                    antIcon="idcard"
                    payType="Touch ID"
                    payDetails="Using Apple ID"
                    onPress={() => {
                        setstate(() => !state);
                        setstate2(() => !state2);
                        setshowDetails(() => !showDetails);
                    }}
                    selected={state ?? state2}
                />
                <PaymentButton
                    antIcon="creditcard"
                    payType="Credit Card"
                    payDetails="Master or Debit"
                    onPress={() => {
                        setstate(() => !state);
                        setstate2(() => !state2);
                        setshowDetails2(() => !showDetails2);
                    }}
                    selected={state2 ?? state}
                />
            </View>
            <View>
                {showDetails ? (
                    <CreditDetails
                        onPress={() => setshowDetails(() => !showDetails)}
                    />
                ) : null}
            </View>
            <View>
                {showDetails2 ? (
                    <CreditDetails
                        onPress={() => setshowDetails2(() => !showDetails2)}
                    />
                ) : null}
            </View>
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
    headerVeiw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 12,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerPrice: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f44336',
        padding: 5,
        borderRadius: 24,
        height: 48,
        width: 180,
        marginVertical: 20,
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
