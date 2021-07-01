/* eslint-disable no-alert */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTasks = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('tasks', jsonValue);
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
};

export const getTasks = async readData => {
  try {
    const value = await AsyncStorage.getItem('tasks');
    if (value !== null) {
      // value previously stored
      const parseValue = JSON.parse(value);
      readData(parseValue);
    } else {
      readData(false);
    }
  } catch (e) {
    // error reading value
    console.log(e);
    return false;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    alert('Storage successfully cleared!');
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};
