// Crea una base de Context para rellenar
import { createContext, useState, useContext, useEffect } from 'react';

const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
    const [example, setExample] = useState([]);

    return (
        <ExampleContext.Provider value={{ example, setExample }}>
            {children}
        </ExampleContext.Provider>
    );
};

export const useExample = () => useContext(ExampleContext);