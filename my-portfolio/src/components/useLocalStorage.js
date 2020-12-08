import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // We store the value to our state
  // we using the useState to pass the initial state only once 
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // We are getting the key from our local storage
      const item = window.localStorage.getItem(key);
      // Parse stored json otherwise return none as our initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      //  return initialValue or error?
      console.log(error);
      return initialValue;
    }
  });

  // Return useState's setter function that persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
