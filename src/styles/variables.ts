import { DefaultTheme } from 'styled-components';

const media = {
  desktop: '992px',
  tablet: '768px',
  mobile: '576px',
};

const colors = {
  black: '#000',
  primary: '#4D00FF',
  gray1: '#999',
};

const app = {
  padding: '10%',
};

const theme: DefaultTheme = { media, colors, app };

export { theme };
