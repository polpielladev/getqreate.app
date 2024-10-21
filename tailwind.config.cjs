/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
		  fontFamily: {
			satoshi: ['Satoshi', ...defaultTheme.fontFamily.sans],
		  },
		},
	},
  plugins: [
		require('flowbite/plugin')
	],
}
