import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    grey500,
    grey700,
    Red500,
    windowWidth,
} from '../config/styleConstants';

const CARD_HEIGHT = 100;
const CARD_WIDTH = windowWidth * 0.9;

interface Props {
    AddType: 'Home' | 'Work' | 'School';
    AddDetails: string;
}

const AddressSelect = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftView}>
                <Text style={styles.addressTypeText}>{props.AddType}</Text>
                <Text style={styles.addressText}>{props.AddDetails}</Text>
            </View>
            <View style={styles.rightView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Select</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddressSelect;

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 8,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    leftView: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 12,
    },
    rightView: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    addressTypeText: {
        fontWeight: 'bold',
        color: grey700,
    },
    addressText: {
        fontWeight: 'bold',
        color: grey500,
    },
    button: {
        width: 100,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        borderWidth: 1.5,
        borderColor: grey500,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#000',
    },
});
