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
    const [state2, setstate2] = useState(false);
    const [onCloseDetails, setOnCloseDetails] = useState(false);
    const [onCloseDetails2, setOnCloseDetails2] = useState(false);
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
                            setTimeout(() => {
                                setstate(() => !state);
                            }, 400);
                            setOnCloseDetails(() => !onCloseDetails);
                        }}
                        selected={!onCloseDetails}
                    />
                </Animatable.View>
                <Animatable.View animation="fadeInDown" duration={500}>
                    <PaymentButton
                        antIcon="creditcard"
                        payType="Credit Card"
                        payDetails="Master or Debit"
                        onPress={() => {
                            setTimeout(() => {
                                setstate2(() => !state2);
                            }, 400);
                            setOnCloseDetails2(() => !onCloseDetails2);
                        }}
                        selected={!onCloseDetails2}
                    />
                </Animatable.View>
            </View>
            <View>
                {state ? (
                    <CreditDetails
                        cardName="Leonard"
                        cardNumber="2345 3456 4567 6778"
                        cardDate="08 May 2018"
                        cardSecure="092"
                        onClose={!onCloseDetails}
                        onPress={() => {
                            setTimeout(() => {
                                setstate(() => !state);
                            }, 400);
                            setOnCloseDetails(() => !onCloseDetails);
                        }}
                    />
                ) : null}
            </View>
            <View>
                {state2 ? (
                    <CreditDetails
                        cardName="David"
                        cardNumber="123 456 789 132"
                        cardDate="25 May 2019"
                        cardSecure="078"
                        onClose={!onCloseDetails2}
                        onPress={() => {
                            setTimeout(() => {
                                setstate2(() => !state2);
                            }, 400);
                            setOnCloseDetails2(() => !onCloseDetails2);
                        }}
                    />
                ) : null}
            </View>
            {modalVisible ? (
                <AlertModal
                    onPress={() => {
                        setModalVisible(() => !modalVisible);
                    }}
                />
            ) : null}
            <View style={styles.redButtonView}>
                <RedButton
                    onPress={() => {
                        state || state2
                            ? navigation.navigate('ConfirmDoneScreen')
                            : setModalVisible(() => !modalVisible);
                    }}
                    text="Select Payment"
                />
            </View>
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        height: windowHeight * 0.89,
        flexDirection: 'column',
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
    redButtonView: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
});
