import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define type for the context.
type DarkModeContextType = {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

// Creation of the context.
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Define interface for the props used in 'DarkModeProvider'.
interface DarkModeProviderProps {
    children: ReactNode;
}

// The provider of the darkmode context.
export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    }

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode) {
            setDarkMode(true);
        }
    }, []);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

// Hook that tries to get the value of DarkModeContext.
export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw Error("useDarkMode must be used within a DarkModeProvider!");
    }
    return context
}

