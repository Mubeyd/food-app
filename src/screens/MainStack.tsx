import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme, Avatar } from 'react-native-paper';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import HomeScreen from './HomeScreen';
import MenuInfo from './MenuInfo';
import BookingStack from './BookingStack';
import SelectScreen from './SelectScreen';
import AddressScreen from './AddressScreen';
import PaymentScreen from './PaymentScreen';
import ConfirmDoneScreen from './ConfirmDoneScreen';

const HomeStack = createStackNavigator();

const MainStack = (navigation: any) => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="SelectScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
            marginRight: 30,
            alignSelf: 'center',
            color: '#fff',
          },
        }}>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'FoodFinder',
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Icon.Button
                  name="ios-menu"
                  size={25}
                  color={colors.text}
                  backgroundColor={colors.background}
                // onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
          }}
        />
        <HomeStack.Screen
          name="CardListScreen"
          component={CardListScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerBackTitleVisible: false,
          })}
        />
        <HomeStack.Screen
          name="CardItemDetails"
          component={CardItemDetails}
          options={({ route }) => ({
            title: route.params.title,
            headerBackTitleVisible: false,
            headerTitle: false,
            headerTransparent: true,
            headerTintColor: '#fff',
          })}
        />
        {/* <HomeStack.Screen
          name="BookingStack"
          component={BookingStack}
          options={({ route }) => ({
            title: 'info',
            headerBackTitleVisible: true,
            // headerTransparent: true,
          })}
        /> */}
        <HomeStack.Screen
          name="MenuInfo"
          component={MenuInfo}
          options={{
            title: 'MenuInfo',
            headerBackTitleVisible: false,
            headerTransparent: true,
          }}
        />
        <HomeStack.Screen
          name="SelectScreen"
          component={SelectScreen}
          options={{
            title: 'SelectScreen',
            headerBackTitleVisible: false,
            // headerTransparent: true,
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 0,
            },
            headerTitleStyle: {
              color: '#000',
              alignSelf: 'center',
            },
          }}
        />
        <HomeStack.Screen
          name="AddressScreen"
          component={AddressScreen}
          options={{
            title: 'AddressScreen',
            headerBackTitleVisible: false,
            // headerTransparent: true,
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 0,
            },
            headerTitleStyle: {
              color: '#000',
              alignSelf: 'center',
            },
          }}
        />
        <HomeStack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            title: 'PaymentScreen',
            headerBackTitleVisible: false,
            // headerTransparent: true,
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 0,
            },
            headerTitleStyle: {
              color: '#000',
              alignSelf: 'center',
            },
          }}
        />
        <HomeStack.Screen
          name="ConfirmDoneScreen"
          component={ConfirmDoneScreen}
          options={{
            title: 'ConfirmDoneScreen',
            headerBackTitleVisible: false,
            headerTintColor: '#000',
            // headerTitle: false,
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 0,
            },
            headerTitleStyle: {
              color: '#000',
              alignSelf: 'center',
            },
            // headerTransparent: true,
            headerLeft: null,
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MainStack;
