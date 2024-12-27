import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addCustomer } from './api';

const AddCustomerScreen = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleAddCustomer = async () => {
        await addCustomer(name, phone);
        alert('Customer added successfully!');
    };

    return (
        <View style={styles.container}>
            <Text>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text>Phone:</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Add Customer" onPress={handleAddCustomer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    input: { borderWidth: 1, marginBottom: 16, padding: 8 },
});

export default AddCustomerScreen;
