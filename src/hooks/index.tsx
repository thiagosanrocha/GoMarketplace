// Modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Contexts
import { CartProvider } from './cart';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
