// Modules
import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

// Interfaces
import Theme from '../styles/themes/interface';

// Themes
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeContext {
  theme: Theme;
  toogleTheme(): void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(light);

  useEffect(() => {
    (async function loadTheme() {
      const response = await AsyncStorage.getItem('@GoMarketplace:theme');

      if (response) {
        setTheme(response === 'light' ? light : dark);
      }
    })();
  }, []);

  const toogleTheme = useCallback(async () => {
    const themeTitle = theme.title;

    themeTitle === 'light' ? setTheme(dark) : setTheme(light);

    await AsyncStorage.setItem(
      '@GoMarketplace:theme',
      themeTitle === 'light' ? 'dark' : 'light',
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContext => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
