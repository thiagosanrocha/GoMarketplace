export default interface Theme {
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
