import React from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';

import StarRating from './StarRating';

const space = 12;
const windowDimension = Dimensions.get('window');
const boxSize = (windowDimension.width - space * 2) / 2 - space / 2;

interface Props {
    name: string;
    logo: string;
    ratings: number;
    reviews: number;
    price: number;
    description1: string;
    description2: string;
    orderState?: 'waiting' | 'processing' | 'cancelled' | 'done';
    imageSource: any;
    onPress: () => void;
}
const MenuCard = (props: Props) => {
    let color = '#ffffff';

    if (props.orderState === 'waiting') {
        color = '#fcba03';
    } else if (props.orderState === 'processing') {
        color = '#00a0fc';
    } else if (props.orderState === 'cancelled') {
        color = '#ff0000';
    } else if (props.orderState === 'done') {
        color = '#00ff11';
    }

    return (
        <View style={styles.conatiner}>
            <ImageBackground
                imageStyle={styles.imageStyle}
                style={styles.ImageBackground}
                source={props.imageSource}>
                <View style={styles.columnLeft}>
                    <Text style={styles.menuType}>Menu Type</Text>
                    <Text style={styles.menuName}>{props.name}</Text>
                </View>
                <View style={styles.columnRight}>
                    <Text style={styles.price}>$ {props.price}.00</Text>
                </View>
            </ImageBackground>

            <View style={styles.bottomView}>
                <View style={styles.starRating}>
                    <StarRating
                        ratings={props.ratings}
                        reviews={props.reviews}
                    />
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity
                        onPress={props.onPress}
                        style={styles.detailsTouch}>
                        <AntDesign name="shoppingcart" size={16} color="#fff" />
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MenuCard;

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: '#fff',
        height: 200,
        elevation: 3,
        width: '100%',
        alignSelf: 'center',
    },
    ImageBackground: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#616161',
    },
    imageStyle: {
        opacity: 0.6,
        resizeMode: 'stretch',
    },
    columnLeft: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    menuType: {
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 48,
        color: '#FF6347',
        height: 26,
        width: 90,
        alignSelf: 'flex-start',
    },
    menuName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 48,
        margin: 12,
        marginLeft: 12,
        color: '#fff',
    },
    price: {
        fontWeight: 'bold',
        color: '#fff',
        margin: 12,
        marginLeft: 12,
        fontSize: 18,
    },
    columnRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 6,
        marginBottom: 0,
    },
    explainTextView: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 14,
    },
    explainText: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: 12,
        color: '#36A7E7',
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 12,
    },
    orderStateTouch: {
        padding: 5,
        borderRadius: 6,
    },
    cardImage: {
        width: 76,
        height: 76,
        alignSelf: 'flex-end',
        marginRight: 0,
        marginTop: 28,
        resizeMode: 'stretch',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    starRating: {
        marginLeft: 12,
    },
    detailsTouch: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f44336',
        padding: 5,
        borderRadius: 6,
        height: 32,
        width: 77,
    },
    addText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
