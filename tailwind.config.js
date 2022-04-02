module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
            'dungeonchunk': [ "DungeonChunk" ],
            press: ["Press Start 2P", "cursive"]
      }
            
    },
    container: {
      padding: '2rem',
    },
  },
  plugins: [],
};