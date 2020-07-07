import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      desktop: string;
      tablet: string;
      mobile: string;
    };

    colors: {
      black: string;
      primary: string;
    };

    app: {
      padding: string;
    };
  }
}
