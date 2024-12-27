import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Button title="Logout" onPress={() => alert('Logged out')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default SettingsScreen;
