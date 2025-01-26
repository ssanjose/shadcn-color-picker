import React from 'react';

export const ColorContext = React.createContext<string | null | undefined>(null);

export const useColorContext = () => {
  const color = React.useContext(ColorContext);

  if (color === undefined) {
    throw new Error('useColorContext must be used within a ColorProvider');
  }

  return color;
}