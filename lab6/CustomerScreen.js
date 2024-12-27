import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAllCustomers } from './api';

const CustomerScreen = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const data = await getAllCustomers();
            setCustomers(data);
        };

        fetchCustomers();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={customers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.phone}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    item: { marginBottom: 16 },
});

export default CustomerScreen;
