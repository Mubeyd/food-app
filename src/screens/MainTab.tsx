import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme, Avatar } from 'react-native-paper';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import HomeScreen from './HomeScreen';
import MexianSpecial from './MexianSpecial';

const HomeStack = createStackNavigator();

const MainTab = (navigation: any) => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
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
            color: '#fff'
          },
        }}>
        <HomeStack.Screen
          name="Home"
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
        <HomeStack.Screen
          name="MexianSpecial"
          component={MexianSpecial}
          options={({ route }) => ({
            title: route.params.title,
            headerBackTitleVisible: false,
            headerTransparent: true,
          })}
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
export default MainTab;
