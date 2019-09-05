import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = storedValue => {

    const [darkValue, setDarkValue] = useLocalStorage(storedValue);

    useEffect(() => {
        darkValue === true ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    },[darkValue]);

    return [darkValue, setDarkValue];
}
