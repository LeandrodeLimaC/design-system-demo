import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '../src/theme'

export const themeDecorator = (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {Story()}
    </ThemeProvider>
);
