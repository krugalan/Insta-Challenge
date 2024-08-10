import axios from 'axios';

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 100000,
  headers: {
    'content-type': 'application/json',
  },
});

// TODO: Set and create interceptors If it is necessary to add Token.

export default client;
