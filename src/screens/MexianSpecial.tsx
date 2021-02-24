import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Animated,
    Image,
    Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import { cardData } from '../model/cardData';

const { width, height1 } = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const MexianSpecial = ({ navigation }) => {
    const { colors } = useTheme();

    const bs = React.useRef(null);

    const [state, setState] = useState(cardData);
    let mapAnimation = new Animated.Value(0);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="fadeInDownBig"
                    duraton="1500"
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
                <Animated.ScrollView
                    // ref={_scrollView}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH + 20}
                    snapToAlignment="center"
                    style={styles.scrollView}
                    contentInset={{
                        top: 0,
                        left: SPACING_FOR_CARD_INSET,
                        bottom: 0,
                        right: SPACING_FOR_CARD_INSET,
                    }}
                    contentContainerStyle={{
                        paddingHorizontal:
                            Platform.OS === 'android'
                                ? SPACING_FOR_CARD_INSET
                                : 0,
                    }}
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
                    {state.map((marker, index) => (
                        <View style={styles.card} key={index}>
                            <MenuCard
                                name={marker.title}
                                logo={marker.logo}
                                ratings={marker.rating}
                                reviews={marker.reviews}
                                price={marker.price}
                                description1={marker.description1}
                                description2={marker.description2}
                                // orderState={marker.orderState}
                                imageSource={marker.image}
                                onPress={() => {
                                    // bs.current.snapTo(0);
                                    console.log('MapCard', index);
                                }}
                            />
                        </View>
                    ))}
                </Animated.ScrollView>
            </Animatable.View>
        </View>
    );
};
export default MexianSpecial;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6347',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#009387',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        height: 800,
        opacity: 0.5,
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    title: {
        color: '#05375a',
        fontSize: 12,
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
        marginTop: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },
    scrollView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: 'hidden',
    },
});
