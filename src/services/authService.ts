import axios, { EndPoints } from 'apis/axios';

export type UserModel = {
  email: '';
  password: '';
};

export const userLogin = async (user: UserModel) => {
  return await axios.post<{ accessToken: string }>(EndPoints.login, user);
};

export type RegisterModel = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  policy: boolean;
};

export const userRegister = async (user: RegisterModel) => {
  return await axios.post<{ accessToken: string }>(EndPoints.register, user);
};
