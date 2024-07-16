// Add the following code at the end of the file
//  
// // New code for aspect ratio
module.exports = {
    theme: {
      extend: {
        aspectRatio: {
          '16/9': [16, 9], // Add other aspect ratios as needed
          '4/3': [4, 3],
          '1/1': [1, 1],
          '3/2': [3, 2],
          '2/3': [2, 3]
        },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }

