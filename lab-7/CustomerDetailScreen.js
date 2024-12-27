import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getCustomerDetail } from './api';

const CustomerDetailScreen = ({ route }) => {
    const customerId = route?.params?.customerId; 
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        if (customerId) {
            const fetchCustomer = async () => {
                const data = await getCustomerDetail(customerId);
                setCustomer(data);
            };

            fetchCustomer();
        }
    }, [customerId]);

    if (!customerId) {
        return (
            <View style={styles.container}>
                <Text>Error: Customer ID can see</Text>
            </View>
        );
    }

    if (!customer) return <Text>Loading...</Text>;

    return (
        <View style={styles.container}>
            <Text>Name: {customer.name}</Text>
            <Text>Phone: {customer.phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
});

export default CustomerDetailScreen;
