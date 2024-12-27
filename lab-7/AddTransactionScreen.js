import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { addTransaction } from './api';

const AddTransactionScreen = ({ route }) => {
    const { token } = route.params;
    const [customerId, setCustomerId] = useState('');
    const [services, setServices] = useState('');

    const handleAdd = async () => {
        const parsedServices = JSON.parse(services); // Pass array of objects [{_id, quantity, userID}]
        await addTransaction(customerId, parsedServices, token);
        alert('Transaction added successfully!');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Customer ID"
                value={customerId}
                onChangeText={setCustomerId}
            />
            <TextInput
                style={styles.input}
                placeholder="Services (JSON)"
                value={services}
                onChangeText={setServices}
            />
            <Button title="Add Transaction" onPress={handleAdd} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    input: { borderWidth: 1, marginBottom: 16, padding: 8 },
});

export default AddTransactionScreen;
