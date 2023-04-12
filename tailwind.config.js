/** @type {import('tailwindcss').Config} */
// export const content = [
//   "./app/**/*.{js,ts,jsx,tsx}",
//   "./pages/**/*.{js,ts,jsx,tsx}",
//   "./components/**/*.{js,ts,jsx,tsx}",

//   // Or if using `src` directory:
//   "./src/**/*.{js,ts,jsx,tsx}",
// ];
// export const theme = {
//   extend: {
//     fontFamily: {
//       montserrat: ["var(--font-montserrat)"],
//     },
//     gridTemplateColumns: {
//       fluid: "repeat(auto-fit,minimax(15rem,1fr))",
//     }
//   },
// };
// export const plugins = [];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,200px)",
      }
    },
  },
  plugins: [],
}