import { userApi } from 'redux/request';

export const signUpService = body => {
  return userApi.post('/users/signup', body);
};

export const signInService = body => {
  return userApi.post('/users/login', body);
};

export const logOutService = () => {
  return userApi.post('/users/logout');
};

export const currentService = () => {
  return userApi.get('/users/current');
};
