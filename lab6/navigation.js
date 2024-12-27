import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from './CustomerScreen';
import AddCustomerScreen from './AddCustomerScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Transactions
const TransactionStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Transactions" component={TransactionScreen} />
            <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
        </Stack.Navigator>
    );
};

// Main Tab Navigator
const MainTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Customers" component={CustomerScreen} />
            <Tab.Screen name="Add Customer" component={AddCustomerScreen} />
     
  
        </Tab.Navigator>
    );
};

// Main Navigation Container
const Navigation = () => {
    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
