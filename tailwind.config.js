import { BREAKPOINTS } from './core/config/vars';

const { nextui } = require('@nextui-org/theme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './core/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/components/(autocomplete|button|input).js',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
        },
        screens: {
            mobile: `${BREAKPOINTS.mobile}px`,
            tablet: `${BREAKPOINTS.tablet}px`,
            desktop: `${BREAKPOINTS.desktop}px`,
        },
    },
    darkMode: 'class',
    plugins: [
        nextui(),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography')({
            strategy: 'class',
        }),
        plugin(({ addUtilities }) => {
            addUtilities({
                '.scrollbar-none': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                },
                '.scrollbar-none::-webkit-scrollbar': {
                    display: 'none',
                },
            });
        }),
    ],
};
