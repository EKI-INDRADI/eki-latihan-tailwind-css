/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}",  "./index.html"],
  theme: {
    extend: {  // untuk menambahkan aturan2 yang tidak ada pada auto complite
      spacing: {  // https://tailwindcss.com/docs/customizing-spacing#extending-the-default-spacing-scale
        '13': '3.25rem'
      }
    },
  },
  plugins: [],
}
