import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('loginToken', token);
    } catch (error) {
        console.error('Error saving token:', error);
    }
};

export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('loginToken');
    } catch (error) {
        console.error('Error fetching token:', error);
    }
};
