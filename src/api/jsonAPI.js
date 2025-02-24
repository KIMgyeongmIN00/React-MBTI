import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getTestResults = async (table) => {
  const response = await axios.get(`${API_URL}/${table}`);
  return response.data;
};

export const getFilterdResults = async (table, key, value) => {
  const response = await axios.get(`${API_URL}/${table}?${key}=${value}`)
  return response.data;
};

export const createTestResult = async (table, resultData) => {
  const response = await axios.post(`${API_URL}/${table}`, resultData)
  return response.data;
};

export const deleteTestResult = async (table, id) => {
  const response = await axios.delete(`${API_URL}/${table}/${id}`)
  return response;
};

export const updateTestResultPublic = async (table, id, visibility) => {
  const response = await axios.patch(`${API_URL}/${table}/${id}`, visibility);
  return response;
};