import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageService {
  public async setData<V = any>(key: string, value: V): Promise<V> {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
    return value;
  }

  public async getData<V = any>(key: string): Promise<V | null> {
    if (key != null && typeof key === 'string') {
      const value = await AsyncStorage.getItem(key);
      if (typeof value === 'string') {
        return JSON.parse(value);
      }
      return value;
    }
    throw new Error('AsyncStorageService#getData(): key is undefined');
  }

  public async remove<Removed = any>(key: string): Promise<Removed> {
    const value = await this.getData(key);
    await AsyncStorage.removeItem(key);
    return value;
  }
}

const asyncStorageService = new AsyncStorageService();
export default asyncStorageService;
