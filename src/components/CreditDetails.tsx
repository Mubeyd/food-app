import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { windowWidth } from '../config/styleConstants';

const CARD_HEIGHT = 120;
const CARD_WIDTH = windowWidth * 0.9;

interface Props {
    onPress: () => void;
    onClose: Boolean;
    cardName: string;
    cardNumber: string;
    cardDate: string;
    cardSecure: string;
}

const CreditDetails = (props: Props) => {
    const [creaditName, setcreaditName] = useState(props.cardName);
    const [creaditNum, setcreaditNum] = useState(props.cardNumber);
    const [creaditDate, setcreaditDate] = useState(props.cardDate);
    const [creaditSecure, setcreaditSecure] = useState(props.cardSecure);
    return (
        <Animatable.View
            animation={props.onClose ? 'fadeOutUp' : 'fadeInDown'}
            duration={400}>
            <Animatable.View
                animation={props.onClose ? 'zoomOut' : 'zoomIn'}
                duration={400}
                style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.viewLeft}>
                        <TextInput
                            style={styles.creaditName}
                            onChangeText={(text) => setcreaditName(text)}
                            value={creaditName}
                        />
                        <TextInput
                            style={styles.creaditName}
                            onChangeText={(text) => setcreaditNum(text)}
                            value={creaditNum}
                        />
                    </View>
                    <View style={styles.viewRight}>
                        <TextInput
                            style={styles.creaditName}
                            onChangeText={(text) => setcreaditDate(text)}
                            value={creaditDate}
                        />
                        <TextInput
                            style={styles.creaditName}
                            onChangeText={(text) => setcreaditSecure(text)}
                            value={creaditSecure}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buttton}
                    onPress={props.onPress}>
                    <AntDesign name="closecircle" size={30} color="#000" />
                </TouchableOpacity>
            </Animatable.View>
        </Animatable.View>
    );
};

export default CreditDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
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
        justifyContent: 'space-around',
        marginVertical: 8,
        alignSelf: 'center',
    },
    viewLeft: {
        justifyContent: 'space-around',
    },
    viewRight: {
        justifyContent: 'space-around',
    },
    creaditName: {
        height: 40,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 24,
        padding: 12,
        marginVertical: 12,
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttton: {
        marginVertical: 18,
    },
});
