import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AlertModal from '../components/AlertModal';
import BookingStages from '../components/BookingStages';
import CreditDetails from '../components/CreditDetails';
import PaymentButton from '../components/PaymentButton';
import RedButton from '../components/RedButton';
import { windowHeight, windowWidth } from '../config/styleConstants';

const PaymentScreen = ({ navigation }) => {
    const [state, setstate] = useState(false);
    const [state2, setstate2] = useState(true);
    const [showDetails, setshowDetails] = useState(false);
    const [showDetails2, setshowDetails2] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <BookingStages orderState="delivery" />
            <View style={styles.headerVeiw}>
                <Text style={styles.headerText}>
                    Choose your payment method
                </Text>
                <Text style={styles.headerPrice}>$ 10.00 </Text>
            </View>
            <View style={styles.buttonsView}>
                <Animatable.View animation="fadeInDown" duration={500}>
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
                </Animatable.View>
                <Animatable.View animation="fadeInDown" duration={500}>
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
                </Animatable.View>
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
            {modalVisible ? (
                <AlertModal
                    onPress={() => {
                        // setModalVisible(() => !modalVisible);
                        {
                        }
                    }}
                />
            ) : null}
            <RedButton
                onPress={() => {
                    showDetails || showDetails2
                        ? navigation.navigate('ConfirmDoneScreen')
                        : setModalVisible(() => !modalVisible);
                }}
                text="Select Payment"
            />
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        height: windowHeight * 0.89,
    },
    headerVeiw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#eee',
        width: windowWidth,
        zIndex: 2,
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
        zIndex: 1,
    },
});
