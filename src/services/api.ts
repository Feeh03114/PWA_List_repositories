import axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const api = axios.create({
    baseURL: 'https://pwa-list-repositories.herokuapp.com/v1',
})



api.interceptors.request.use(
    async (config): Promise<AxiosRequestConfig> => {
      const token = await AsyncStorage.getItem('@test:token');
      //console.log(token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      console.error('Axios interceptor: ', error);
    },
  );
//'http://localhost:3000/v1'
//'https://pwa-list-repositories.herokuapp.com/v1'

export default api;