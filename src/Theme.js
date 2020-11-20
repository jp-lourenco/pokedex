import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        grass: '#32fc4e',
        fire: '#f57a30',
        water: '#0200F3',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
