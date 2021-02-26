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
        initialRouteName="PaymentScreen"
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
            headerTitleStyle: {
              color: '#000',
              alignSelf: 'center',
              marginRight: '10%',
            },
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
            title: 'Menu Info',
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              alignSelf: 'center',
              marginRight: '10%',
            },
          }}
        />
        <HomeStack.Screen
          name="SelectScreen"
          component={SelectScreen}
          options={{
            title: 'Booking',
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
              marginRight: '10%',
            },
          }}
        />
        <HomeStack.Screen
          name="AddressScreen"
          component={AddressScreen}
          options={{
            title: 'Confirmation',
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
              marginRight: '10%',
            },
          }}
        />
        <HomeStack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            title: 'Confirmation',
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
              marginRight: '10%',
            },
          }}
        />
        <HomeStack.Screen
          name="ConfirmDoneScreen"
          component={ConfirmDoneScreen}
          options={{
            title: 'Confirm Done Screen',
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
            headerShown: false,
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
