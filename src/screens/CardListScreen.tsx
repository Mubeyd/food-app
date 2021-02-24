import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { cardData } from '../model/cardData';
import Card from '../components/Card';

interface Item {
    id: string;
    coordinate: {};
    title: string;
    description: string;
    image: string;
    rating: number;
    reviews: number;
    categories: [];
}
const CardListScreen = ({ navigation }) => {
    const [state, setState] = useState(cardData);

    const renderItem = (item) => {
        return (
            <Card
                itemData={item}
                onPress={() =>
                    navigation.navigate('CardItemDetails', { itemData: item })
                }
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
});
