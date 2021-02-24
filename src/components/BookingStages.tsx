import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    orderState?: 'select' | 'address' | 'delivery';
}

const BookingStages = (props: Props) => {
    let color1, color2, color3;

    if (props.orderState === 'select') {
        (color1 = '#f44336'), (color2 = '#9e9e9e'), (color3 = '#9e9e9e');
    } else if (props.orderState === 'address') {
        (color1 = '#f44336'), (color2 = '#f44336'), (color3 = '#9e9e9e');
    } else if (props.orderState === 'delivery') {
        (color1 = '#f44336'), (color2 = '#f44336'), (color3 = '#f44336');
    }
    return (
        <View style={styles.header}>
            <View style={styles.sectionView}>
                <View style={[styles.circleView, { backgroundColor: color1 }]}>
                    <Text style={styles.circleNumber}>1</Text>
                </View>
                <Text style={[styles.text1, { color: color1 }]}> Select </Text>
            </View>
            <View style={styles.sectionView}>
                <View style={[styles.circleView, { backgroundColor: color2 }]}>
                    <Text style={styles.circleNumber}>2</Text>
                </View>
                <Text style={[styles.text1, { color: color2 }]}> Address </Text>
            </View>
            <View style={styles.sectionView}>
                <View style={[styles.circleView, { backgroundColor: color3 }]}>
                    <Text style={styles.circleNumber}>3</Text>
                </View>
                <Text style={[styles.text1, { color: color3 }]}>Delivery</Text>
            </View>
        </View>
    );
};

export default BookingStages;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 12,
    },
    sectionView: {
        flexDirection: 'row',
    },
    text1: {
        color: '#f44336',
        fontWeight: 'bold',
    },
    text2: {
        color: '#9e9e9e',
    },
    text3: {
        color: '#9e9e9e',
    },
    circleView: {
        backgroundColor: '#f44336',
        borderRadius: 24,
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    circleNumber: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
