import { AsyncStorage } from 'react-native';

export default class StorageService {
  constructor () {
  }

  async set (key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.warn(error);
    }
  }

  async get (key) {
    try {
      const getAsyncStorage = await AsyncStorage.getItem(key);
      return getAsyncStorage;
    } catch (error) {
      console.warn(error);
    }
  }

  async setAsyncStorage (key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  }

  async getAsyncStorage (key) {
    try {
      const getAsyncStorageData = await AsyncStorage.getItem(key);
      const getAsyncStorageParsed = JSON.parse(getAsyncStorageData);
      return getAsyncStorageParsed;
    } catch (error) {
      console.warn(error);
    }
  }

  remove (key) {
    return AsyncStorage.removeItem(key);
  }

  async multiGet (keys) {
    await AsyncStorage.multiGet(keys);
  }

  clear () {
    return AsyncStorage.getAllKeys()
    .then((keys) => {
      for (let i = 0; i < keys.length; i++) {
        this.remove(keys[i]);
      }
    });
  }
}
