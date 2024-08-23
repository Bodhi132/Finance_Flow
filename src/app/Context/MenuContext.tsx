// MenuContext.tsx
"use client"
import React, { createContext, useState, ReactNode } from 'react';

interface MenuContextProps {
  menu: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  }

  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};