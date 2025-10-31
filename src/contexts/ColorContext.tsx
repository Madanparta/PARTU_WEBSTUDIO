import React, { createContext, useContext, useState, type ReactNode, } from 'react';

interface ColorContextType {
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [textColor, setTextColor] = useState<string>('white');

  return (
    <ColorContext.Provider value={{ textColor, setTextColor }}>
      {children}
    </ColorContext.Provider>
  );
};
