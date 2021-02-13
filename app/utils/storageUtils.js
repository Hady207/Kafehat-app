import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageWrite = async (itemName, itemValue) => {
  try {
    const jsonItem = JSON.stringify(itemValue);
    console.log(jsonItem);
    await AsyncStorage.setItem(`${itemName}`, jsonItem);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};

export const storageRead = async (itemName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`${itemName}`);
    console.log('inside storage read', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};

export const storageDelete = async (itemName) => {
  try {
    console.log('inside storage delete', itemName);
    await AsyncStorage.removeItem(itemName);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};
