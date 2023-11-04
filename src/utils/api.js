import axios from 'axios';

const API_URL = 'https://fakeapi.platzi.com/en/rest/auth-jwt';

export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    const { access_token, refresh_token } = response.data;
    await AsyncStorage.setItem('access_token', access_token);
    await AsyncStorage.setItem('refresh_token', refresh_token);
    return { access_token, refresh_token };
  } catch (error) {
    throw new Error('Authentication failed');
  }
};
export const saveTasksToStorage = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      throw new Error('Error saving tasks');
    }
  };
  
  export const getTasksFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('tasks');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      throw new Error('Error retrieving tasks');
    }
  };
  