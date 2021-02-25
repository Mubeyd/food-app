import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
    payType: 'Touch ID' | 'Credit Card';
    payDetails: string;
    antIcon: string;
    onPress: () => void;
    selected: Boolean;
}

const PaymentButton = (props: Props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={props.selected ? styles.onbutton : styles.button}>
                <AntDesign
                    name={props.antIcon}
                    size={24}
                    color={props.selected ? '#000' : '#fff'}
                />
                <View>
                    <Text
                        style={
                            props.selected ? styles.onmainText : styles.mainText
                        }>
                        {props.payType}
                    </Text>
                    <Text
                        style={
                            props.selected
                                ? styles.ondetailText
                                : styles.detailText
                        }>
                        {props.payDetails}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f44336',
        padding: 12,
        borderRadius: 48,
        borderWidth: 0.4,
        borderColor: '#000',
        height: 90,
        width: 180,
        marginVertical: 20,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    mainText: {
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    detailText: {
        justifyContent: 'center',
        color: '#fff',
        fontSize: 14,
    },
    onbutton: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 48,
        borderWidth: 0.4,
        borderColor: '#000',
        height: 90,
        width: 180,
        marginVertical: 20,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    onmainText: {
        justifyContent: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    ondetailText: {
        justifyContent: 'center',
        color: '#000',
        fontSize: 14,
    },
});
