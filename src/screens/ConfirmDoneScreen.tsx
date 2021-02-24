import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ConfirmDoneScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.headerText}>ConfirmDoneScreen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={styles.button}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmDoneScreen;

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
