import axios from 'axios';

const BASE_URL = 'https://kami-backend-5rs0.onrender.com';

export const getAllCustomers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/customers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error;
    }
};

export const addCustomer = async (name, phone) => {
    try {
        const response = await axios.post(`${BASE_URL}/customers`, { name, phone });
        return response.data;
    } catch (error) {
        console.error('Error adding customer:', error);
        throw error;
    }
};

export const getAllTransactions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/transactions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

export const getTransactionById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/transactions/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction:', error);
        throw error;
    }
};
