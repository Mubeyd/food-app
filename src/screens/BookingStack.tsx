import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuInfo from './MenuInfo';
import SelectScreen from './SelectScreen';
import AddressScreen from './AddressScreen';
import PaymentScreen from './PaymentScreen';
import ConfirmDoneScreen from './ConfirmDoneScreen';

// have to be removed
const BookingRootStack = createStackNavigator();

const BookingStack = () => {
    return (
        <BookingRootStack.Navigator
            headerMode="none"
            initialRouteName="MenuInfo">
            <BookingRootStack.Screen
                name="MenuInfo"
                component={MenuInfo}
                options={{
                    title: 'Awesome app',
                    headerTransparent: true,
                }}
            />
            <BookingRootStack.Screen
                name="SelectScreen"
                component={SelectScreen}
            />
            <BookingRootStack.Screen
                name="AddressScreen"
                component={AddressScreen}
            />
            <BookingRootStack.Screen
                name="PaymentScreen"
                component={PaymentScreen}
            />
            <BookingRootStack.Screen
                name="ConfirmDoneScreen"
                component={ConfirmDoneScreen}
            />
        </BookingRootStack.Navigator>
    );
};

// export default BookingStack;
