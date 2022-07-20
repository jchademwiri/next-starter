/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '540px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				body: '#17171F',
				primary: '#3F3FFF',
				secondary: '#A3A3FF',
				accent: '#FDA50F',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
