import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { editCustomer } from './api';

const EditCustomerScreen = ({ route }) => {
    const { customerId, token } = route.params;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleEdit = async () => {
        await editCustomer(customerId, name, phone, token);
        alert('Customer updated successfully!');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Save Changes" onPress={handleEdit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    input: { borderWidth: 1, marginBottom: 16, padding: 8 },
});

export default EditCustomerScreen;
