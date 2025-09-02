/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				vahid: ['Vazirmatn', 'ui-sans-serif', 'system-ui'],
			},
		},
	},
	plugins: [],
}


