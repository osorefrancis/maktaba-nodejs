import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {},
  },
  plugins: [forms],
}

