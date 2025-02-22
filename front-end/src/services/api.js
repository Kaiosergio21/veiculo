import axios from 'axios';

const API_URL = 'http://localhost:8080/veiculos';

export const getVeiculos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addVeiculo = async (veiculo) => {
    const response = await axios.post(API_URL, veiculo);
    return response.data;
};

export const updateVeiculo = async (codigo, veiculo) => {
    const response = await axios.put(`${API_URL}/${codigo}`, veiculo);
    return response.data;
};

export const deleteVeiculo = async (codigo) => {
    await axios.delete(`${API_URL}/${codigo}`);
};