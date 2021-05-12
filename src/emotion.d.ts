import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      orange: {
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        900: string;
      };
      yellow: {
        400: string;
      };
      black: {
        400: string;
      };
      white: {
        400: string;
      };
      green: {
        400: string;
        300: string;
      };
      red: {
        400: string;
        600: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
    };
  }
}
