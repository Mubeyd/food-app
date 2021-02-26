import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Animated,
    Platform,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import { cardData } from '../model/cardData';
import BuyCard from '../components/BuyCard';
import { windowWidth } from '../config/styleConstants';

const CARD_HEIGHT = 220;
const CARD_WIDTH = windowWidth * 0.8;
const SPACING_FOR_CARD_INSET = windowWidth * 0.1 - 10;

const MenuInfo = ({ navigation }) => {
    const [state, setState] = useState(cardData);
    let mapAnimation = new Animated.Value(0);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f44336" barStyle="light-content" />
            <View style={{ height: CARD_HEIGHT - 90 }}>
                <Animatable.View
                    animation="fadeInDownBig"
                    duration={1000}
                    style={styles.header}>
                    <ImageBackground
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="stretch">
                        <Text style={styles.menuDetailsText}>
                            Boritos with minced Meat Filling
                        </Text>
                        <Text style={styles.menuTypeText}>Mexian Special</Text>
                    </ImageBackground>
                </Animatable.View>
            </View>
            <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
                <View>
                    <View style={styles.buyCard}>
                        <BuyCard
                            onPress={() => navigation.navigate('SelectScreen')}
                        />
                    </View>
                    <Text style={styles.saparatorText}>
                        ---- Related Foods ----
                    </Text>
                </View>
                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH + 20}
                    snapToAlignment="center"
                    style={styles.scrollView}
                    contentInset={styles.contentInset}
                    contentContainerStyle={styles.contentContainerStyle}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: mapAnimation,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: true },
                    )}>
                    {state.map((item, index) => (
                        <View style={styles.menuCard} key={index}>
                            <MenuCard
                                name={item.title}
                                logo={item.logo}
                                ratings={item.rating}
                                reviews={item.reviews}
                                price={item.price}
                                description1={item.description1}
                                description2={item.description2}
                                imageSource={item.image}
                                onPress={() => {
                                    console.log('Card', index);
                                }}
                            />
                        </View>
                    ))}
                </Animated.ScrollView>
            </Animatable.View>
        </View>
    );
};
export default MenuInfo;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 800,
        borderBottomRightRadius: 800,
        backgroundColor: '#f44336',
        marginBottom: -160,
        marginLeft: -100,
        marginRight: -100,
    },
    menuDetailsText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 14,
        marginVertical: 24,
    },
    menuTypeText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
    },
    saparatorText: {
        margin: 36,
        color: '#757575',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    footer: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        opacity: 0.5,
        marginTop: 12,
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    scrollView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    buyCard: {
        elevation: 22,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH - 20,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    menuCard: {
        elevation: 12,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: -4 },
        height: CARD_HEIGHT - 20,
        width: CARD_WIDTH,
        overflow: 'hidden',
    },
    contentInset: {
        top: 0,
        left: SPACING_FOR_CARD_INSET,
        bottom: 0,
        right: SPACING_FOR_CARD_INSET,
    },
    contentContainerStyle: {
        paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
    },
});
