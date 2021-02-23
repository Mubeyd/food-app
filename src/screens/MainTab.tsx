import React from 'react';
import { Text, View } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

// const Tab = createMaterialBottomTabNavigator();

const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';

    if (routeName === 'ServicesMap') {
        return false;
    }

    return true;
}
const MainTab = () => (
    <View>
        <Text>Hello</Text>
    </View>

    // <Tab.Navigator
    //     initialRouteName="ProfileStack"
    //     activeColor="#fff"
    // >
       
    // </Tab.Navigator>
)
export default MainTab
