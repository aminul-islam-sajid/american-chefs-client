/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-Image': "url('https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg?auto=compress&cs=tinysrgb&w')",
       "error": "url('https://www.shutterstock.com/image-photo/skeptic-surprised-cat-thinking-dont-260nw-1905929728.jpg')"
       
      }
      
    },
  },
  plugins: [require("daisyui")],
}

