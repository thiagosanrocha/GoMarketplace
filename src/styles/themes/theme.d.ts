import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
    };

    shapesBackgrounds: {
      primary: string;
      secondary: string;
      tertiary: string;
      quartiary: string;
    };

    texts: {
      primary: string;
      secondary: string;
    };
  }
}
