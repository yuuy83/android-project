import axios from 'axios';

const BASE_URL = 'https://kami-backend-5rs0.onrender.com';

export const getCustomerDetail = async (id) => {
    try {
        const response = await axios.post(`${BASE_URL}/customers/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching customer detail:', error);
        throw error;
    }
};

export const editCustomer = async (id, name, phone, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/customers/${id}`, {
            name,
            phone,
            loginToken: token,
        });
        return response.data;
    } catch (error) {
        console.error('Error editing customer:', error);
        throw error;
    }
};

export const deleteCustomer = async (id, token) => {
    try {
        const response = await axios.delete(`${BASE_URL}/customers/${id}`, {
            data: { loginToken: token },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting customer:', error);
        throw error;
    }
};

export const addTransaction = async (customerId, services, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/transactions`, {
            CustomerId: customerId,
            Services: services,
            loginToken: token,
        });
        return response.data;
    } catch (error) {
        console.error('Error adding transaction:', error);
        throw error;
    }
};

export const deleteTransaction = async (id, token) => {
    try {
        const response = await axios.delete(`${BASE_URL}/transactions/${id}`, {
            data: { loginToken: token },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting transaction:', error);
        throw error;
    }
};
