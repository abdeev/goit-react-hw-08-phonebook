import axios from 'axios';

export const userApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set(token) {
    userApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    userApi.defaults.headers.common.Authorization = '';
  },
};
