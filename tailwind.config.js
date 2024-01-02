import { BREAKPOINTS } from './core/config/vars';

const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './core/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
        screens: {
            mobile: `${BREAKPOINTS.mobile}px`,
            tablet: `${BREAKPOINTS.tablet}px`,
            desktop: `${BREAKPOINTS.desktop}px`,
        },
        borderWidth: {
            1: '1px',
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography')({
            strategy: 'class',
        }),
        plugin(({ addUtilities }) => {
            addUtilities(
                {
                    '.scrollbar-hide': {
                        /* IE and Edge */
                        '-ms-overflow-style': 'none',

                        /* Firefox */
                        'scrollbar-width': 'none',

                        /* Safari and Chrome */
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    },

                    '.scrollbar-default': {
                        /* IE and Edge */
                        '-ms-overflow-style': 'auto',

                        /* Firefox */
                        'scrollbar-width': 'auto',

                        /* Safari and Chrome */
                        '&::-webkit-scrollbar': {
                            display: 'block',
                        },
                    },
                },
                ['responsive']
            );
        }),
    ],
};