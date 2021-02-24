import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageWrite = async (itemName, itemValue) => {
  try {
    const jsonItem = JSON.stringify(itemValue);
    await AsyncStorage.setItem(`${itemName}`, jsonItem);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};

export const storageRead = async (itemName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`${itemName}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};

export const storageDelete = async (itemName) => {
  try {
    await AsyncStorage.removeItem(itemName);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};
