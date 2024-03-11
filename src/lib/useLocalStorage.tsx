import React from "react";

const useLocalStorage = <T,>(keyName: string, defaultValue: T) => {
    const [storedValue, setStoredValue] = React.useState<T>(() => {
      try {
        const value = localStorage.getItem(keyName);
  
        if (value) {
          return JSON.parse(value) as T;
        } else {
          localStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (err) {
        return defaultValue;
      }
    });

    React.useEffect(() => {
      try {
        localStorage.setItem(keyName, JSON.stringify(storedValue));
      } catch (err) {
        console.log(err)
      }
    }, [storedValue])
  
  
    return [storedValue, setStoredValue] as const;
};

export default useLocalStorage