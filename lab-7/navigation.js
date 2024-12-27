import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerDetailScreen from './CustomerDetailScreen';
import EditCustomerScreen from './EditCustomerScreen';
import AddTransactionScreen from './AddTransactionScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Transactions
const TransactionStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Transactions" component={TransactionScreen} />
            <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
            <Stack.Screen name="Customer Detail" component={CustomerDetailScreen} />

        </Stack.Navigator>
    );
};

// Main Tab Navigator
const MainTabNavigator = () => {
    return (
       <Tab.Navigator>
    <Tab.Screen name="Customer Detail" component={CustomerDetailScreen} />
    <Tab.Screen name="Edit Customer" component={EditCustomerScreen} />
    <Tab.Screen name="Add Transaction" component={AddTransactionScreen} />
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
