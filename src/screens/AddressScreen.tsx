import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AddressSelect from '../components/AddressSelect';
import BookingStages from '../components/BookingStages';
import RedButton from '../components/RedButton';

const AddressScreen = ({ navigation }) => {
    const [state, setstate] = useState(false);
    const [state2, setstate2] = useState(true);
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
            <RedButton
                onPress={() => navigation.navigate('PaymentScreen')}
                text="Pay"
            />
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
});
