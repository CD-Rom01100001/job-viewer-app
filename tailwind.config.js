/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        destructive: "oklch(0.577 0.245 27.325)",
        "destructive-foreground": "oklch(0.985 0 0)",
        // можешь добавить другие цвета из твоего global.css
      },
    },
  },
  plugins: [],
}
